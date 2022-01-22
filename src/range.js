/* global Predicate */

import assert from './assert.js';
import { isFunction } from './types.js';

/**
 * Produces an array of values from the start number to the end number
 *
 * @param   {number} start
 * @param   {number} end
 * @param   {number} [step]
 * @param   {Predicate} [predicate] A function to map against each iterated step, similar to Array.from()
 * @returns {Array<number|any>}
 */
export default function range (start, end, step = 1, predicate = null) {
  if (isFunction(step)) {
    predicate = step;
    step = 1;
  }
  assert(start <= end, 'End value must be larger than start value');
  assert(step > 0, 'Step must be a positive number');

  const result = [];
  for (let i = start; i <= end; i += step) {
    if (predicate) {
      const res = predicate(i, i, i);
      if (res !== undefined) result.push(res);
    } else {
      result.push(i);
    }
  }
  return result;
}
