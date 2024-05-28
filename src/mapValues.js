/* global Collection, Predicate */
import {
  isMap,
  isObject,
} from './types.js';
import assert from './assert.js';
import iteratee from './iteratee.js';
import entries from './entries.js';

/**
 * Iterates over an object's properties, transforming the values with a predicate
 *
 * @param   {object} collection
 * @param   {Predicate} predicate
 *
 * @returns {object}
 */
export default function mapValues (collection, predicate) {
  assert(isMap(collection) || isObject(collection, true), 'mapValues only works for simple objects, use mapReduce.');
  predicate = iteratee(predicate);

  const result = {};

  let i = 0;
  for (const [ key, value ] of entries(collection)) {
    result[key] = predicate(value, key, i++);
  }

  return result;
}
