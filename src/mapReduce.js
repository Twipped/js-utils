/* global Collection, Predicate */
import {
  isArray,
  isUndefined,
  isUndefinedOrNull,
} from './types.js';

import entries from './entries.js';

/**
 * Iterates over a collection and generates an object based on key/value tuples returned from the predicate.
 *
 * @param  {Collection} collection
 * @param  {Function} predicate
 * @returns {object}
 */
export default function mapReduce (collection, predicate) {
  if (!collection) return {};

  const result = {};

  let i = 0;
  for (const [ k, v ] of entries(collection)) {
    const res = predicate(v, k, i++);
    if (res === false) return result;
    if (!isArray(res)) continue;
    const [ key, value ] = res;
    if (isUndefinedOrNull(key) || isUndefined(value)) continue;
    result[key] = value;
  }

  return result;
}
