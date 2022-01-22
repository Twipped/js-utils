
import { isFunction } from './types.js';

/**
 * Produces a function that executes a sequence of functions with the
 * same arguments, ignoring the return results.
 *
 * @param   {...Function} functions Functions to evaluate.
 *
 * @category Functional
 * @returns {Function}
 */
export default function series (...functions) {
  functions = functions.filter(isFunction);
  return function seriesFunction (...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
