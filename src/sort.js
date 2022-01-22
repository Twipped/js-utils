/* global Collection, Predicate */

import {
  isMap,
  isSet,
  isArray,
  isObject,
} from './types.js';
import sorter from './sorter.js';
import fromPairs from './fromPairs.js';
import toPairs from './toPairs.js';

/**
 * Sort a collection according to a provided predicate.
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 *
 * @returns {Collection}
 */
export default function sort (collection, predicate) {

  predicate = sorter(predicate);

  if (isArray(collection)) return collection.slice().sort(predicate);

  if (isSet(collection)) {
    return new Set(Array.from(collection.values()).sort(predicate));
  }

  // sort by key for maps and objects
  const hashpredicate = (a, b) => predicate(a[0], b[0]);

  if (isMap(collection)) {
    return new Map(Array.from(collection.entries()).sort(hashpredicate));
  }

  if (isObject(collection)) {
    return fromPairs(toPairs(collection).sort(hashpredicate));
  }

  return collection;
}
