/* global Collection */
import {
  isString,
} from './types.js';
import mapMode, {
  MAPMODE_ARRAY,
  MAPMODE_SET,
  MAPMODE_MAP,
  MAPMODE_OBJECT,
  MAPMODE_ITERABLE,
  MAPMODE_ITERATOR,
  MAPMODE_STRING,
} from './mapMode.js';
import nullIterator from './nullIterator.js';

/**
 * Creates a new empty collection of the same type passed.
 *
 * @param  {Collection} collection [description]
 * @param  {boolean} [strict] If true, iterable and object detection will be strict (see isObject and isIterable)
 * @returns {any}
 */
export default function faccimilate (collection, strict) {
  switch (isString(collection) ? collection : mapMode(collection, strict)) {
  case MAPMODE_ARRAY:    return [];
  case MAPMODE_SET:      return new Set();
  case MAPMODE_MAP:      return new Map();
  case MAPMODE_OBJECT:   return {};
  case MAPMODE_ITERABLE: return { [Symbol.iterator]: nullIterator };
  case MAPMODE_ITERATOR: return nullIterator();
  case MAPMODE_STRING:   return '';
  default:               return undefined;
  }
}
