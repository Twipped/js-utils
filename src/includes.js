/* global Collection */
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isString,
} from './types.js';

/**
 * Identical to Array.prototype.includes, but works for all Collection types except Iterables.
 *
 * @param   {Collection} collection
 * @param   {any} value
 * @returns {boolean}
 */
export default function includes (collection, value) {
  if (isArray(collection) || isString(collection)) return collection.includes(value);
  if (isSet(collection)) return collection.has(value);
  if (isMap(collection)) return Array.from(collection.values()).includes(value);
  if (isObject(collection)) return Object.values(collection).includes(value);
  return false;
}
