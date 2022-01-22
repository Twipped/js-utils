/* global Collection, Predicate */

import anyBy from './anyBy.js';

/**
 * Checks that none of the values in the collection evaluate as truthy against the predicate
 *
 * @param  {Collection} collection [description]
 * @param  {Predicate} predicate See `iteratee` for usage.
 *
 * @returns {boolean}
 * @category Collections
 */
export default function noneBy (collection, predicate = null) {
  return !anyBy(collection, predicate);
}
