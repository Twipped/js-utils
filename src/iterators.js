
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isIterator,
  isIterable,
} from './isType';

export function* nullIterator () {}


export function ensureIterable (it) {
  if (isIterable(it)) return it;
  if (isIterator(it) && !isIterable(it)) return (function* () { yield it.next(); }());
  return nullIterator();
}

export function entries (collection) {
  if (isArray(collection) || isSet(collection) || isMap(collection)) return collection.entries();
  if (isObject(collection, true)) return Object.entries(collection);
  if (isIterable(collection)) {
    return (function* () {
      let i = 0;
      for (const value of collection) {
        yield [ i++, value ];
      }
    }());
  }
  return nullIterator();
}
