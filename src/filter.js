/* global Collection, Predicate */
import mapMode, {
  MAPMODE_OBJECT,
  MAPMODE_MAP,
  MAPMODE_SET,
  MAPMODE_ITERABLE,
  MAPMODE_ARRAY,
} from './mapMode.js';
import entries from './entries.js';
import iteratee from './iteratee.js';
import fromPairs from './fromPairs.js';

/**
 * Filter a collection using a predicate
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 *
 * @returns {Collection}
 */
export default function filter (collection, predicate) {
  predicate = iteratee(predicate);
  const mode = mapMode(collection);

  switch (mode) {
  case MAPMODE_ARRAY:
    return collection.filter((value, i) => predicate(value, i, i));

  case MAPMODE_SET:
    return Array.from(collection).filter((value, i) => predicate(value, i, i));

  case MAPMODE_MAP:
  case MAPMODE_OBJECT: {
    const pairs = Array.from(entries(collection)).filter(([ key, value ], i) => predicate(value, key, i));
    return fromPairs(pairs, mode);
  }

  case MAPMODE_ITERABLE:
    return (function* () {
      let i = 0;
      for (const value of collection) {
        if (predicate(value, i, i++)) yield value;
      }
    }());

  default:
    throw new Error('filter can only be applied to Arrays, Objects, Sets and Maps, perhaps you meant to use omit?');
  }
}
