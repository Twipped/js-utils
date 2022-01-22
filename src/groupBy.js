/* global Collection, Predicate */
import iteratee from './iteratee.js';
import reduce from './reduce.js';

/**
 * Produce an object of arrays containing the collection's contents, keyed according to the predicate.
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 *
 * @returns {Object<Array>}
 */
export default function groupBy (collection, predicate) {
  predicate = iteratee(predicate);
  return reduce(collection, (result, value, key, index) => {
    const k = predicate(value, key, index);
    (result[k] || (result[k] = [])).push(value);
    return result;
  }, {});
}
