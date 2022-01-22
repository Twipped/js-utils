/* global Collection, Predicate */

import {
  isFunction,
  isUndefined,
} from './types.js';
import assert from './assert.js';
import entries from './entries.js';

/**
 * Reduces a collection to a single value in the usual manner
 *
 * @param   {Collection} collection
 * @param   {Function} predicate
 * @param   {any} initial
 *
 * @returns {any}
 */
export default function reduce (collection, predicate, initial) {
  assert(isFunction(predicate), 'Predicate must be a function');

  let result = initial;
  let i = 0;
  for (const [ k, v ] of entries(collection)) {
    if (!i && isUndefined(initial)) {
      result = v;
      i++;
      continue;
    }
    result = predicate(result, v, k, i++);
  }

  return result;
}
