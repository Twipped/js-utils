/* global Collection */

import {
  isMap,
  isSet,
  isArray,
  isObject,
  isIterable,
} from './types.js';
import nullIterator from './nullIterator.js';
import iterateObject, { ITERATE_KEYS } from './iterateObject.js';

/**
 * Produces an iterator that yields the keys from the given collection
 *
 * @param   {Collection} collection
 *
 * @returns {Iterator}
 * @category Iterables
 */
export default function keys (collection) {
  if (isArray(collection) || isMap(collection)) return collection.keys();
  if (isObject(collection, true)) return iterateObject(collection, ITERATE_KEYS);
  if (isSet(collection) || isIterable(collection)) {
    return (function* () {
      let i = 0;
      for (const value of collection) { // eslint-disable-line no-unused-vars
        yield i++;
      }
    }());
  }
  return nullIterator();
}
