/* global Collection, Predicate */

import iteratee from './iteratee.js';
import entries from './entries.js';

/**
 * Checks that any value in the collection evaluates as truthy against the predicate
 *
 * @param  {Collection} collection [description]
 * @param  {Predicate} predicate See `iteratee` for usage.
 * @returns {boolean}
 * @category Collections
 */
export default function anyBy (collection, predicate = null) {
  if (!collection) return false;

  predicate = iteratee(predicate);
  const it = entries(collection);

  let i = 0;
  for (const [ k, v ] of it) {
    if (predicate(v, k, i++)) return true;
  }

  return false;
}
