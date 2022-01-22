/* global Collection, Predicate */

import iteratee from './iteratee.js';
import entries from './entries.js';

/**
 * Iterates over a collection, providing the previous, current and next items to the predicate function.
 *
 * @param  {Collection} collection
 * @param  {Predicate} predicate
 * @returns {Array}
 * @category Collections
 */
export default function threepiece (collection, predicate) {
  predicate = iteratee(predicate);

  let prev, current, next;
  let index = -2;
  const results = [];

  for (const value of entries(collection)) {
    index++;
    prev = current;
    current = next;
    next = value;
    if (index >= 0) results.push(predicate(prev, current, next, index));
  }

  if (index > -2) results.push(predicate(current, next, undefined, index + 1));

  return results;
}
