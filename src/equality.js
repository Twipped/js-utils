
import {
  mapMode,
  MAPMODE_ARRAY,
  MAPMODE_SET,
  MAPMODE_MAP,
  MAPMODE_OBJECT,
} from './collections.js';
import { isNumber, isRegExp, sizeOf } from './isType.js';

export function isEqualTo (value) {
  return (tok) => equal(value, tok);
}

export function equal (a, b, depth = 1) {
  if (a === b) return true;
  if (isNumber(a) && isNumber(b) && isNaN(a) && isNaN(b)) return true;
  if ((!a || !b) || typeof a !== typeof b) return false;

  if (isRegExp(a) && isRegExp(b)) return a.source === b.source && a.flags === b.flags;

  if (!depth) {
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    return false;
  }

  const aType = mapMode(a);
  const bType = mapMode(b);
  if (aType !== bType || !aType || !bType) return false;

  const aLen = sizeOf(a);
  const bLen = sizeOf(b);
  if (aLen !== bLen) return false;

  if (aType === MAPMODE_ARRAY) {
    if (a.length !== b.length) return false;
    for (let i = a.length; i--;) {
      if (!equal(a[i], b[i], depth - 1)) return false;
    }

  } else if (aType === MAPMODE_SET) {
    for (const item of a) {
      if (!b.has(item)) return false;
    }

  } else if (aType === MAPMODE_MAP) {
    for (const [ key, left ] of a.entries()) {
      const right = b.get(key);
      if (!equal(left, right, depth - 1)) return false;
    }

  } else if (aType === MAPMODE_OBJECT) {
    for (const [ key, left ] of Object.entries(a)) {
      const right = b[key];
      if (!equal(left, right, depth - 1)) return false;
    }
  } else {
    return false;
  }

  return true;
}

export function shallowEqual (a, b) {
  return equal(a, b, 1);
}

export function deepEqual (a, b) {
  return equal(a, b, Infinity);
}
