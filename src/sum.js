
import flatten from './flatten.js';

/**
 * Returns the sum of all values given.
 *
 * @param   {...number} collection
 *
 * @returns {number}
 * @category Math
 */
export default function sum (...collection) {
  collection = flatten(collection);
  return collection.reduce((a, b) => a + b, 0);
}
