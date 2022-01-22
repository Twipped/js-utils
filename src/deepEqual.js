
import equal from './equal.js';

/**
 * Compares two collections to their maximum depth.
 *
 * @param   {any} a
 * @param   {any} b
 *
 * @returns {boolean}
 */
export default function deepEqual (a, b) {
  return equal(a, b, Infinity);
}
