import { isDate } from './types.js';
import flatten from './flatten.js';

/**
 * Returns the largest of the values given.
 * If values are dates, returns the most recent.
 *
 * @param   {...number|Date} collection
 *
 * @returns {number|Date}
 * @category Math
 */
export default function max (...collection) {
  collection = flatten(collection);
  if (isDate(collection[0])) return new Date(Math.max(...collection));
  return Math.max(...collection);
}
