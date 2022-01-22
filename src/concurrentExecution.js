/* global Predicate */
import assert from './assert.js';
import pTry from './pTry.js';

/**
 * Executes the given predicate against the given iterator asynchronously, gating so that
 * only `concurrency` number predicates are running at once, resolving with an array
 * of all values produced, in order of the iterator.
 *
 * @param   {number} concurrency
 * @param   {Iterator} iterator
 * @param   {Predicate} predicate
 * @private
 * @returns {Promise}
 * @category Promises
 */
export default async function concurrentExecution (concurrency, iterator, predicate) {
  assert(concurrency > 0, 'Concurrency must be a number larger than 0.');
  const processing = new Map();
  const results = [];
  let index = 0;
  let value, done;

  /**
   * Populates the queue
   *
   * @private
   */
  function fill () {
    while (!done && processing.size < concurrency) {
      ({ value, done } = iterator.next(index));
      if (done) return;
      processing.set(index, pTry(predicate, value, index));
      index++;
    }
  }

  /**
   * Waits for a queue item to complete.
   *
   * @returns {Promise}
   * @private
   */
  function race () {
    return new Promise((resolve, reject) => {
      for (const [ idx, promise ] of processing.entries()) {
        promise.then(() => resolve(idx), reject);
      }
    });
  }

  do {
    fill();
    if (done) break;

    const completedIndex = await race();
    results[completedIndex] = await processing.get(completedIndex);
    processing.delete(completedIndex);

  } while (true);

  await Promise.all(processing.values());
  for (const [ idx, promise ] of processing.entries()) {
    results[idx] = await promise;
  }

  return Array.from(results);
}
