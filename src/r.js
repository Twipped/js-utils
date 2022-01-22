
import { isFunction } from './types.js';

/**
 * Resolves the passed value. If the value is a function, then
 * the function is invoked, passing along any other arguments received.
 * If the function returns another function, it is resolved recursively.
 *
 * @param   {any|Function}    input Value or resolvable function
 * @param   {...any} args Arguments to pass to functions.
 *
 * @returns {any}
 * @category Functional
 */
export default function r (input, ...args) {
  return isFunction(input) ? r(input(...args), args) : input;
}
