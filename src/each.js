/* global Collection, Predicate */

import iteratee from './iteratee.js';
import entries from './entries.js';

/**
 * Iterates over a collection, ignoring the results and returning the original collection.
 *
 * @param  {Collection} collection
 * @param  {Function} predicate
 * @returns {Collection}
 */
export default function each (collection, predicate) {
  predicate = iteratee(predicate);

  let i = 0;
  for (const [ key, value ] of entries(collection)) {
    if (predicate(value, key, i++) === false) break;
  }

  return collection;
}
