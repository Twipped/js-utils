/* global Collection, Predicate */
import entries from './entries.js';
import iteratee from './iteratee.js';


/**
 * Find a value in a collection using a predicate.
 *
 * @param   {Collection} collection
 * @param   {Predicate} predicate
 *
 * @returns {any}
 */
export default function find (collection, predicate) {
  predicate = iteratee(predicate);

  let i = 0;
  for (const [ k, v ] of entries(collection)) {
    if (predicate(v, k, i++)) return v;
  }
  return false;
}
