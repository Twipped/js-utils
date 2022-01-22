/* global Collection, Predicate */
import {
  isMap,
  isSet,
  isArray,
  isObject,
} from './types.js';
import iteratee from './iteratee.js';
import mapReduce from './mapReduce.js';

/**
 * Remove duplicates from a collection
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 *
 * @returns {Collection}
 */
export default function uniq (collection, predicate = null) {

  if (!collection) return collection;

  if (!predicate && isArray(collection)) return [ ...new Set(collection) ];

  if (predicate === undefined || predicate === null) {
    predicate = (v) => v;
  } else {
    predicate = iteratee(predicate);
  }

  const exists = new Set();

  if (isArray(collection)) {
    const result = [];
    collection.forEach((v) => {
      const match = predicate(v);
      if (exists.has(match)) return;
      exists.add(match);
      result.push(v);
    });

    return result;
  }

  if (isSet(collection)) return new Set(collection); // really?

  if (isMap(collection)) {
    return new Map(Array.from(collection.entries(), ([ k, v ]) => {
      const match = predicate(v);
      if (exists.has(match)) return false;
      exists.add(match);
      return [ k, v ];
    }).filter(Boolean));
  }

  if (isObject(collection)) {
    return mapReduce(collection, (v, k) => {
      const match = predicate(v);
      if (exists.has(match)) return null;
      exists.add(match);
      return [ k, v ];
    });
  }

  return collection;
}
