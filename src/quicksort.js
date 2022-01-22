import { isObject } from './types.js';

/**
 * Compares the left and right value and returns -1, 0, or +1 based on which is larger.
 *
 * @param   {any} a left value
 * @param   {any} b right value
 *
 * @returns {number}
 * @category Data
 */
export default function quicksort (a, b) {
  if (isObject(a)) {
    if (a.valueOf !== Object.prototype.valueOf) a = a.valueOf();
    a = 1;
  }
  if (isObject(b)) {
    if (b.valueOf !== Object.prototype.valueOf) b = b.valueOf();
    b = 1;
  }
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
}
