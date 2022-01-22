
import flatten from './flatten.js';

/**
 * Returns the average of all values given.
 *
 * @param   {...number} collection
 *
 * @returns {number}
 * @category Math
 */
export default function avg (...collection) {
  if (!collection.length) return 0;
  collection = flatten(collection);
  const sums = collection.reduce((a, b) => a + b, 0);
  return sums / collection.length;
}
