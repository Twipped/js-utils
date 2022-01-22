/* global Collection */

import {
  isMap,
  isSet,
  isArray,
  isObject,
  isIterator,
  isIterable,
} from './types.js';
import nullIterator from './nullIterator.js';
import iterateObject, { ITERATE_VALUES } from './iterateObject.js';

/**
 * Produces an iterator that yields the values from the given collection
 *
 * @param   {Collection} collection
 *
 * @returns {Iterator}
 * @category Iterables
 */
export default function values (collection) {
  if (isArray(collection) || isMap(collection) || isSet(collection)) return collection.values();
  if (isObject(collection, true)) return iterateObject(collection, ITERATE_VALUES);
  if (isIterable(collection) && !isIterator(collection)) {
    return (function* () {
      let i = 0;
      for (const value of collection) {
        yield [ i++, value ];
      }
    }());
  }
  if (isIterable(collection)) return collection;
  return nullIterator();
}
