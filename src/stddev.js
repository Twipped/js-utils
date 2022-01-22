
import flatten from './flatten.js';

/**
 * Returns the standard deviation of all values given.
 *
 * @param   {...number} collection
 *
 * @returns {number}
 * @category Math
 */
export default function stddev (...collection) {
  if (!collection.length) return 0;
  collection = flatten(collection);
  const sums = collection.reduce((a, b) => a + b, 0);
  const mean = sums / collection.length;
  let totDiff = 0;
  for (const value of collection) {
    const diff = value - mean;
    const sq = diff * diff;
    totDiff += sq;
  }
  return Math.sqrt(totDiff / collection.length);
}
