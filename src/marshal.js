/* global Collection, Predicate */

import {
  isObject,
  isFunction,
  isString,
  isArray,
} from './types.js';
import { isArrayOfStrings } from './isArrayOf.js';
import mapMode, {
  MAPMODE_ARRAY,
  MAPMODE_OBJECT,
  MAPMODE_MAP,
  MAPMODE_SET,
} from './mapMode.js';
import each from './each.js';
import faccimilate from './faccimilate.js';

/**
 * Tests if the passed value is a marshal map schema
 *
 * @param   {any} input
 *
 * @returns {boolean}
 * @private
 */
const isMarshalMap = (input) => {
  if (!isObject(input, true)) return false;
  for (const v of Object.values(input)) {
    if (!isArrayOfStrings(v)) return false;
  }
  return true;
};

/**
 * Organize a collection into value buckets according to a map
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 * @param   {string} rest
 *
 * @returns {object}
 * @category Data
 */
export default function marshal (collection, predicate, rest = 'UNKNOWN') {
  if (!collection) return {};

  const mode = mapMode(collection);
  if (!mode) throw new TypeError('Received unmappable collection.');
  const buckets = {};
  const marshallers = {
    [MAPMODE_ARRAY]: (bucket, v) => {
      if (!buckets[bucket]) buckets[bucket] = [];
      buckets[bucket].push(v);
    },
    [MAPMODE_OBJECT]: (bucket, v, k) => {
      if (!buckets[bucket]) buckets[bucket] = {};
      buckets[bucket][k] = v;
    },
    [MAPMODE_MAP]: (bucket, v, k) => {
      if (!buckets[bucket]) buckets[bucket] = new Map();
      buckets[bucket].set(k, v);
    },
    [MAPMODE_SET]: (bucket, v) => {
      if (!buckets[bucket]) buckets[bucket] = new Set();
      buckets[bucket].add(v);
    },
  };

  if (isMarshalMap(predicate)) {
    each(collection, (value, key) => {
      let matched = false;
      each(predicate, (keyset, name) => {
        if (keyset.includes(key)) {
          marshallers[mode](name, value, key);
          matched = true;
        }
      });
      if (!matched) {
        marshallers[mode](rest, value, key);
      }
    });
    return buckets;
  }

  if (isFunction(predicate)) {
    each(collection, (value, key, index) => {
      marshallers[mode](predicate(value, key, index) ?? key, value, key);
    });
    return buckets;
  }

  if (isString(predicate)) {
    predicate = [ predicate ];
  }

  if (!isArray(predicate)) throw new Error('marshal requires a function, a string, an array of strings, or an object map of string arrays for the second argument');
  const targets = new Set(predicate);
  each(collection, (value, key) => {
    marshallers[mode](targets.has(key) ? 0 : 1, value, key);
  });
  return [ buckets[0] || faccimilate(collection), buckets[1] || faccimilate(collection) ];
}
