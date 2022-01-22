/* global Collection */

import {
  isString,
  isNumber,
  isDate,
  isBoolean,
  isArray,
  isSet,
  isMap,
  isUndefined,
  isObject,
} from './types.js';

/**
 * Returns true if the passed value is empty, by some measure of its type.
 * - objects (true if no properties, fuzzy mode true if no non-undefined properties)
 * - arrays, maps & sets (true if no values, fuzzy mode true if no non-undefined values)
 * - strings (true if “”)
 * - numbers (true if NaN, fuzzy mode true if 0)
 * - booleans (always false, fuzzy mode true if false)
 * - dates (always false, fuzzy mode true if invalid)
 * - undefined (always true)
 * - null (always false in strict mode, always true in fuzzy mode)
 *
 * @param {Collection} collection Value to test for emptiness
 * @param {boolean} [fuzzy] Fuzzy mode
 * @returns {boolean}
 */
export default function empty (collection, fuzzy) {
  if (collection === undefined || Number.isNaN(collection)) return true;
  if (collection === null) return !fuzzy;

  if (isString(collection)) return !collection.length;
  if (isNumber(collection)) return fuzzy ? !collection : false;
  if (isDate(collection)) return fuzzy ? Number.isNaN(collection.valueOf()) : false;
  if (isBoolean(collection)) return fuzzy ? !collection : false;

  if (!fuzzy) {
    if (isArray(collection)) return !collection.length;
    if (isSet(collection) || isMap(collection)) return !collection.size;
  }

  if (fuzzy && isArray(collection)) {
    for (const item of collection) {
      if (!isUndefined(item)) return false;
    }
    return true;
  }

  if (fuzzy && isSet(collection)) {
    for (const item of collection) {
      if (!isUndefined(item)) return false;
    }
    return true;
  }

  if (fuzzy && isMap(collection)) {
    for (const item of collection.values()) {
      if (!isUndefined(item)) return false;
    }
    return true;
  }

  if (isObject(collection)) {
    for (const prop in collection) { // eslint-disable-line no-restricted-syntax
      if (fuzzy && isUndefined(collection[prop])) continue;
      else return false;
    }
    return true;
  }

  return undefined;
}
