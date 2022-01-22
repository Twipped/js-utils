/* global Predicate, Collection */
import { isUndefined } from './types.js';
import entries from './entries.js';
import iteratee from './iteratee.js';

/**
 * It's reduce, but for promises.
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 * @param   {any} initial
 *
 * @returns {Promise}
 * @category Promises
 */
export default async function pReduce (collection, predicate, initial) {
  collection = await collection;
  predicate = iteratee(predicate);
  const it = entries(collection);
  const subpredicate = async (p, [ k, v ], i) => predicate(p, v, k, i);

  let result = await initial;
  let index = 0;
  for (const entry of it) {
    if (!index && isUndefined(initial)) {
      [ , result ] = entry;
      index++;
      continue;
    }
    result = await subpredicate(result, entry, index++);
  }

  return result;
}
