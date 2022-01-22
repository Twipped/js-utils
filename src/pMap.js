/* global Collection, Predicate */
import iteratee from './iteratee.js';
import concurrentExecution from './concurrentExecution.js';
import entries from './entries.js';
import mapMode from './mapMode.js';
import fromPairs from './fromPairs.js';

/**
 * Map over the given collection asynchronously, gating so that
 * only `concurrency` number predicates are running at once. Resolves with
 * an array containing the results in order of the collection.
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 * @param   {Object} [options]
 * @param   {number} [options.concurrency=Infinity]
 *
 * @returns {Promise}
 * @category Promises
 */
export default async function pmap (collection, predicate, { concurrency = Infinity } = {}) {
  collection = await collection;
  predicate = iteratee(predicate);
  const mode = mapMode(collection);
  const it = entries(collection);

  const subpredicate = async ([ k, v ], i) => [ k, await predicate(v, k, i) ];
  if (concurrency && concurrency !== Infinity) {
    collection = await concurrentExecution(concurrency, it, subpredicate);
  } else {
    collection = await Promise.all(Array.from(it, subpredicate));
  }

  return fromPairs(collection, mode);
}
