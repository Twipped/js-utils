/* global Collection */
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isIterable,
} from './types.js';
import nullIterator from './nullIterator.js';
import iterateObject, { ITERATE_ENTRIES } from './iterateObject.js';

/**
 * Produces an iterator that yields a tuple of key/value pairs from the given collection.
 *
 * @param   {Collection} collection
 *
 * @returns {Iterator}
 * @category Iterables
 */
export default function entries (collection) {
  if (isArray(collection) || isMap(collection)) return collection.entries();
  if (isObject(collection, true)) return iterateObject(collection, ITERATE_ENTRIES);
  if (isSet(collection) || isIterable(collection)) {
    return (function* () {
      let i = 0;
      for (const value of collection) {
        yield [ i++, value ];
      }
    }());
  }
  return nullIterator();
}
