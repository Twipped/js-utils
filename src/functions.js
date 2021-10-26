
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isFunction,
  isUndefinedOrNull,
  isNumber,
  isString,
  isPrimitive,
} from './isType.js';
import { get } from './objects.js';

export function noop () {}
export function passthru (x) { return x; }

export function r (input, ...args) {
  return isFunction(input) ? r(input(...args), args) : input;
}

export function not (fn) {
  return (...args) => !fn(...args);
}

export function iteratee (match) {
  if (isUndefinedOrNull(match)) return (v) => v;

  if (isFunction(match)) return match;

  if (isString(match)) {
    return (o) => {
      if (isArray(o)) return o.includes(match);
      if (isMap(o)) return o.get(match);
      if (isSet(o)) return o.has(match);
      if (isPrimitive(o)) return o[match];
      if (isObject(o)) return get(o, match);
      return o === match;
    };
  }

  if (isNumber(match)) {
    return (o) => {
      if (isMap(o)) return o.get(match);
      if (isSet(o)) return o.has(match);
      if (isObject(o) || isArray(o)) return o[match];
      if (isNumber(o)) return o === match;
      if (isString(o)) return Number(o) === match;
      return o === match;
    };
  }

  if (isArray(match)) {
    const [ key, value ] = match;
    return (o) => o[key] === value;
  }

  if (isObject(match)) {
    // create an array of key/value iteratees
    const tests = Object.entries(match).map(iteratee);
    // evaluate the object against the array
    return (o) => {
      for (const t of tests) {
        if (!t(o)) return false;
      }
      return true;
    };
  }
}

export function quicksort (a, b) {
  if (isObject(a)) {
    if (a.valueOf !== Object.prototype.valueOf) a = a.valueOf();
    a = 1;
  }
  if (isObject(b)) {
    if (b.valueOf !== Object.prototype.valueOf) b = b.valueOf();
    b = 1;
  }
  if (a > b) return 1;
  else if (b > a) return -1;
  return 0;
}

export function sorter (match) {

  if (isFunction(match)) return match;

  if (isString(match)) {
    return (a, b) => {
      if (!isObject(a) && !isObject(b)) return quicksort(a, b);
      if (!isObject(a)) return -1;
      if (!isObject(b)) return 1;
      return quicksort(get(a, match), get(b, match));
    };
  }

  if (isArray(match)) {
    return (a, b) => {
      if (!isObject(a) && !isObject(b)) return quicksort(a, b);
      if (!isObject(a)) return -1;
      if (!isObject(b)) return 1;
      for (let k of match) {
        let asc = true;
        if (isArray(k)) {
          k = k[0];
          asc = false;
        }
        let left, right;
        if (isFunction(k)) {
          left = k(a);
          right = k(b);
        } else {
          left = get(a, k);
          right = get(b, k);
        }
        const v = asc ? quicksort(left, right) : quicksort(right, left);
        if (v) return v;
      }
      return 0;
    };
  }

  if (isObject(match)) {
    return (a, b) => {
      if (!isObject(a) && !isObject(b)) return quicksort(a, b);
      if (!isObject(a)) return -1;
      if (!isObject(b)) return 1;
      for (const [ k, d ] of Object.entries(match)) {
        const v = quicksort(a[k], b[k]) * (d < 0 ? -1 : 1);
        if (v) return v;
      }
      return 0;
    };
  }

  return (a, b) => {
    if (!isObject(a) && !isObject(b)) return quicksort(a, b);
    if (!isObject(a)) return -1;
    if (!isObject(b)) return 1;
    return 0;
  };
}

export function chain (...funcs) {
  return funcs
    .filter(isFunction)
    .reduce((prev, next) => function chainedFunction (...args) {
      next.apply(this, prev.apply(this, args));
    }) || noop;
}

export function series (...funcs) {
  funcs = funcs.filter(isFunction);
  return function seriesFunction (...args) {
    for (const fn of funcs) {
      fn(...args);
    }
  };
}
