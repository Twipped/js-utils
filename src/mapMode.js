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

/** @constant */ export const MAPMODE_ARRAY  = 'ARRAY';
/** @constant */ export const MAPMODE_SET    = 'SET';
/** @constant */ export const MAPMODE_MAP    = 'MAP';
/** @constant */ export const MAPMODE_OBJECT = 'OBJECT';
/** @constant */ export const MAPMODE_ITERABLE = 'ITERABLE';
/** @constant */ export const MAPMODE_ITERATOR = 'ITERATOR';
/** @constant */ export const MAPMODE_STRING = 'STRING';
/** @enum {string} */ export const MAPMODE = {
  [MAPMODE_ARRAY]: MAPMODE_ARRAY,
  [MAPMODE_SET]: MAPMODE_SET,
  [MAPMODE_MAP]: MAPMODE_MAP,
  [MAPMODE_OBJECT]: MAPMODE_OBJECT,
  [MAPMODE_ITERATOR]: MAPMODE_ITERATOR,
  [MAPMODE_ITERABLE]: MAPMODE_ITERABLE,
};


/**
 * Returns the constant identifying the type of the passed collection.
 *
 * @param  {Collection} collection
 * @param  {boolean} strict
 * @returns {MAPMODE}
 */
export default function mapMode (collection, strict) {
  if (isString(collection)) return MAPMODE_STRING;
  if (isArray(collection)) return MAPMODE_ARRAY;
  if (isSet(collection)) return MAPMODE_SET;
  if (isMap(collection)) return MAPMODE_MAP;
  if (isIterator(collection)) return MAPMODE_ITERATOR;
  if (isIterable(collection, strict)) return MAPMODE_ITERABLE;
  if (isObject(collection, strict)) return MAPMODE_OBJECT;
  return false;
}
