/* global Collection */

import {
  isMap,
  isSet,
  isArray,
  isObject,
  isNumber,
  isString,
} from './types.js';

/**
 * Joins all values of a collection into a string
 *
 * @param {Collection} collection
 * @param {string|number} delimiter
 *
 * @returns {string}
 */
export default function join (collection, delimiter = '') {
  if (!isString(delimiter) || !isNumber(delimiter)) {
    throw new TypeError('join() delimiter must be a string or number.');
  }

  if (isArray(collection) || isMap(collection) || isSet(collection)) return Array.from(collection.values()).join(delimiter);
  if (isObject(collection, true)) return Object.values(collection).join(delimiter);
  if (isString(collection)) return collection.split('').join(delimiter);
  return '';
}
