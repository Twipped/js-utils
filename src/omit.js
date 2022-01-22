/* global Collection, Predicate */
import iteratee from './iteratee.js';
import mapReduce from './mapReduce.js';


/**
 * Produce a collection without certain values
 *
 * @param   {Object|Array} collection
 * @param   {Predicate} predicate
 *
 * @returns {Collection}
 */
export default function omit (collection, predicate) {
  predicate = iteratee(predicate);

  return mapReduce(collection, (value, key, index) =>
    (predicate(value, key, index)
      ? [ undefined, undefined ]
      : [ key, value ])
  );
}
