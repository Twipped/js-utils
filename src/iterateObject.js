/* global Collection */

import hasOwn from './hasOwn.js';

/** @constant **/export const ITERATE_ENTRIES = 'ENTRIES';
/** @constant **/export const ITERATE_VALUES = 'VALUES';
/** @constant **/export const ITERATE_KEYS = 'KEYS';
/** @enum {Object} **/const ITERATE_MODE = {
  [ITERATE_ENTRIES]: ITERATE_ENTRIES,
  [ITERATE_VALUES]:  ITERATE_VALUES,
  [ITERATE_KEYS]:    ITERATE_KEYS,
};

/**
 * Iterates over a given object's contents using the mode provided.
 *
 * @param  {Collection} collection
 * @param  {ITERATE_MODE} mode
 *
 * @yields {any}
 * @category Iterables
 */
export default function* iterateObject (collection, mode = ITERATE_ENTRIES) {
  for (const key in collection) { // eslint-disable-line no-restricted-syntax
    if      (!hasOwn(collection, key)) continue;
    if      (mode === ITERATE_ENTRIES) yield [ key, collection[key] ];
    else if (mode === ITERATE_KEYS)    yield key;
    else if (mode === ITERATE_VALUES)  yield collection[key];
  }
}
iterateObject.ENTRIES = ITERATE_ENTRIES;
iterateObject.VALUES  = ITERATE_VALUES;
iterateObject.KEYS    = ITERATE_KEYS;
