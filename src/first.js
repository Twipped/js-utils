/* global Collection */

import entries from './entries.js';

/**
 * Returns the first iterate value in the collection.
 *
 * @param   {Collection} collection
 * @param   {number} [count] Number of values to return.
 *
 * @returns {any|Array<any>}
 */
export default function first (collection, count = null) {
  const itr = entries(collection);
  if (!itr.next) return undefined;
  if (!count || count === 1) return itr.next()?.value[1];

  const result = [];
  while (result.length < count) {
    const { value, done } = itr.next();
    if (done) break;
    result.push(value[1]);
  }
  return result;
}
