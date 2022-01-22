/* global Collection */
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isString,
  isIterator,
  isIterable,
} from './types.js';
import assert from './assert.js';
import fromPairs from './fromPairs.js';
import toPairs from './toPairs.js';

/**
 * Extract a subset of iterate items from a collection.
 *
 * @param   {Collection} collection
 * @param   {number} begin
 * @param   {number} end
 *
 * @returns {Array}
 */
export default function slice (collection, begin, end) {
  if (isString(collection) || isArray(collection)) return collection.slice(begin, end);

  if (isSet(collection)) {
    return new Set(Array.from(collection.values()).slice(begin, end));
  }

  if (isMap(collection)) {
    return new Map(Array.from(collection.entries()).slice(begin, end));
  }

  if (isIterable(collection)) return Array.from(collection).slice(begin, end);

  if (isIterator(collection)) {
    assert(begin >= 0 && end >= 0, 'Negative position values cannot be used when slicing an iterator');
    const result = [];
    let i = 0;
    while (true) {
      const { value, done } = collection.next();
      if (done) break;
      if (i >= begin && i <= end) result.push(value);
      if (++i > end) break;
    }
    return result;
  }

  if (isObject(collection)) {
    return fromPairs(toPairs(collection).slice(begin, end));
  }

  return collection;
}
