
import equal from './equal.js';

/**
 * Compares two collections by their first level of properties.
 *
 * @param   {any} a
 * @param   {any} b
 *
 * @returns {boolean}
 */
export default function shallowEqual (a, b) {
  return equal(a, b, 1);
}
