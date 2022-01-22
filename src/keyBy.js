/* global Collection, Predicate */
import iteratee from './iteratee.js';
import mapReduce from './mapReduce.js';

/**
 * Produce an object keyed according to the predicate.
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 *
 * @returns {Object}
 */
export default function keyBy (collection, predicate) {
  predicate = iteratee(predicate);
  return mapReduce(collection, (value, key, index) =>
    [ predicate(value, key, index), value ]
  );
}
