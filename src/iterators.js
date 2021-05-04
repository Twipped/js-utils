
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isIterator,
  isIterable,
} from './isType.js';

export function* nullIterator () {}


export function ensureIterable (it) {
  if (isIterable(it)) return it;
  if (isIterator(it) && !isIterable(it)) return (function* () { yield it.next(); }());
  return nullIterator();
}

export function entries (collection) {
  if (isArray(collection) || isMap(collection)) return collection.entries();
  if (isObject(collection, true)) return Object.entries(collection).values(); // Object.entries returns an array, not an iterable
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
  if (isObject(collection, true)) return Object.values(collection).values(); // Object.entries returns an array, not an iterable
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
  if (isObject(collection, true)) return Object.keys(collection).values(); // Object.entries returns an array, not an iterable
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
