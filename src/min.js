
import { isDate } from './types.js';
import flatten from './flatten.js';

/**
 * Returns the smallest of the values given.
 * If values are dates, returns the oldest.
 *
 * @param   {...number|Date} collection
 *
 * @returns {number|Date}
 * @category Math
 */
export default function min (...collection) {
  collection = flatten(collection);
  if (isDate(collection[0])) return new Date(Math.min(...collection));
  return Math.min(...collection);
}
