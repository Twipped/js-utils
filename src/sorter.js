/* global Predicate */

import {
  isArray,
  isObject,
  isFunction,
  isString,
} from './types.js';
import quicksort from './quicksort.js';
import get from './get.js';

/**
 * Produces a sorting function using predicate logic.
 *
 * @param   {Predicate} match Iteratee predicate descriptor
 *
 * @returns {Function}
 */
export default function sorter (match) {
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
