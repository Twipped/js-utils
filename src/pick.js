/* global Collection, Predicate */

import iteratee from './iteratee.js';
import mapReduce from './mapReduce.js';

/**
 * Produce a collection containing only certain values
 *
 * @param   {Object|Array} collection
 * @param   {Predicate} predicate
 *
 * @returns {Collection}
 */
export default function pick (collection, predicate) {
  predicate = iteratee(predicate);

  return mapReduce(collection, (value, key, index) =>
    (predicate(value, key, index)
      ? [ key, value ]
      : [ undefined, undefined ])
  );
}
