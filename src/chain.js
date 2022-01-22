import { isFunction } from './types.js';
import noop from './noop.js';

/**
 * Produces a function that executes a sequence of functions, passing
 * the result of each into the next function.
 *
 * @param   {...Function} functions Functions to evaluate.
 *
 * @category Functional
 * @returns {Function}
 */
export default function chain (...functions) {
  return functions
    .filter(isFunction)
    .reduce((prev, next) => function chainedFunction (...args) {
      next(prev(...args));
    }) || noop;
}
