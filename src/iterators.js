
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isIterator,
  isIterable,
  hasOwn,
} from './isType.js';

export function* nullIterator () {}


export function ensureIterable (it) {
  if (isIterable(it)) return it;
  if (isIterator(it) && !isIterable(it)) return (function* () { yield it.next(); }());
  return nullIterator();
}

export const ITERATE_ENTRIES = 'ENTRIES';
export const ITERATE_VALUES = 'VALUES';
export const ITERATE_KEYS = 'KEYS';

export function* iterateObject (collection, mode = ITERATE_ENTRIES) {
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

export function entries (collection) {
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

export function values (collection) {
  if (isArray(collection) || isMap(collection) || isSet(collection)) return collection.values();
  if (isObject(collection, true)) return iterateObject(collection, ITERATE_VALUES);
  if (isIterable(collection) && !isIterator(collection)) {
    return (function* () {
      let i = 0;
      for (const value of collection) {
        yield [ i++, value ];
      }
    }());
  }
  if (isIterable(collection)) return collection;
  return nullIterator();
}

export function keys (collection) {
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

export function* chunkIterable (input, size = 2) {
  const iterator = input[Symbol.iterator]();
  let chnk = [];
  let next;
  while (!(next = iterator.next()).done) {
    chnk.push(next.value);
    if (chnk.length === size) {
      yield chnk;
      chnk = [];
    }
  }
  return chnk;
}
