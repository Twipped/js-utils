/* global Collection */

import {
  isMap,
  isSet,
  isArray,
  isObject,
  isString,
} from './types.js';

/**
 * Returns the last iterate values in the collection.
 *
 * @param {Array|Set|Object|Map|string} input
 * @param {number} [count=1]
 * @returns {any|Array<any>}
 */
export default function last (input, count = 1) {
  if (count === 1) {
    if (isArray(input) || isString(input)) return input[input.length - 1];
  }

  if (isArray(input) || isString(input)) return input.slice(-count);
  if (isSet(input)) return Array.from(input).slice(-count);
  if (isObject(input)) return Object.values(input).slice(-count);
  if (isMap(input)) return Array.from(input.values()).slice(-count);
}
