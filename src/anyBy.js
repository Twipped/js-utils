
import {
  isFunction,
  isArray,
  isSet,
  isMap,
  isObject,
} from './isType.js';
import { iteratee } from './functions.js';
import { entries } from './iterators.js';

export function allBy (collection, predicate = null) {
  if (!collection) return false;
  if (predicate === null) {
    predicate = (v) => v;
  } else if (!isFunction(predicate)) {
    predicate = iteratee(predicate);
  }

  const it = entries(collection);

  let i = 0;
  for (const [ k, v ] of it) {
    if (!predicate(v, k, i++)) return false;
  }

  return true;
}


export function anyBy (collection, predicate = null) {
  if (!collection) return false;
  if (predicate === null) {
    predicate = (v) => v;
  } else if (!isFunction(iteratee)) {
    predicate = iteratee(predicate);
  }

  if (isArray(collection)) {
    let i = 0;
    for (const value of collection) {
      if (predicate(value, i, i++)) return true;
    }
    return false;
  }

  if (isSet(collection)) {
    let i = 0;
    for (const item of collection) {
      if (predicate(item, i, i++)) return true;
    }
    return false;
  }

  // received a Map
  if (isMap(collection)) {
    let i = 0;
    for (const [ key, value ] of collection.entries()) {
      if (predicate(value, key, i++)) return true;
    }
    return false;
  }

  // received an object hash
  if (isObject(collection)) {
    let i = 0;
    for (const [ key, value ] of Object.entries(collection)) {
      if (predicate(value, key, i++)) return true;
    }
    return false;
  }

  return !!collection;
}


export function noneBy (collection, predicate = null) {
  return !anyBy(collection, predicate);
}
