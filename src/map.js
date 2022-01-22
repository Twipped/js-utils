/* global Collection, Predicate */
import {
  isString,
} from './types.js';
import iteratee from './iteratee.js';
import entries from './entries.js';


/**
 * Iterates over a collection with a predicate and produces an array of generated values.
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 *
 * @returns {Array}
 */
export default function map (collection, predicate) {
  predicate = iteratee(predicate);

  if (isString(collection)) {
    collection = collection.split('');
  }

  const it = entries(collection);
  const subpredicate = ([ k, v ], i) => predicate(v, k, i);

  return Array.from(it, subpredicate);
}
