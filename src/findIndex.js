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

/**
 * Find the index/key of a value in a collection using a predicate
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 *
 * @returns {number|string|any}
 */
export default function findIndex (collection, predicate) {
  predicate = iteratee(predicate);

  let i = 0;
  switch (mapMode(collection, true)) {
  case MAPMODE_OBJECT:
  case MAPMODE_MAP:
    for (const [ key, value ] of entries(collection)) {
      if (predicate(value, key, i++)) return key;
    }
    return false;

  case MAPMODE_SET:
  case MAPMODE_ITERABLE:
  case MAPMODE_ARRAY:
    for (const [ k, v ] of entries(collection)) {
      if (predicate(v, k, i++)) return k;
    }
    return false;
  // no default
  }
}
