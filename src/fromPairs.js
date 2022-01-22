/* global Collection, MAPMODE */
import {
  MAPMODE_OBJECT,
  MAPMODE_MAP,
  MAPMODE_SET,
  MAPMODE_ITERABLE,
  MAPMODE_ARRAY,
} from './mapMode.js';
import mapReduce from './mapReduce.js';

/**
 * Produces a collection from an array of key/value tuples.
 *
 * @param   {Array<Array<any,any>>} pairs
 * @param   {Object} options
 * @param   {MAPMODE} [options.mode] Type of collection to produce. Defaults to Object.
 *
 * @returns {Collection}
 */
export default function fromPairs (pairs, { mode = MAPMODE_OBJECT } = {}) {
  switch (mode) {
  case MAPMODE_OBJECT:
    if (Object.fromEntries) return Object.fromEntries(pairs); // eslint-disable-line
    return mapReduce(pairs);
  case MAPMODE_MAP: return new Map(pairs);
  case MAPMODE_SET: return new Set(pairs.map(([ , v ]) => v));
  case MAPMODE_ITERABLE:
    return function* () {
      for (const [ , v ] of pairs) {
        yield v;
      }
    };

  case MAPMODE_ARRAY:
    return pairs.map((v) => v[1]);

  // no default
  }
}
