
import flatten from './flatten.js';

/**
 * Returns the median of all values given.
 *
 * @param   {...number} collection
 *
 * @returns {number}
 * @category Math
 */
export default function median (...collection) {
  if (!collection.length) return 0;
  collection = flatten(collection);

  if (collection.length % 2) {
    const i = Math.floor(collection.length / 2);
    return collection[i];
  }

  const i = Math.floor(collection.length / 2);
  return (Number(collection[i]) + (collection[i + 1])) / 2;
}
