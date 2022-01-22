/**
 * Produces a function which is the boolean inversion of the given function.
 *
 * @param   {Function} fn Function
 *
 * @returns {Function}
 * @category Functional
 */
export default function not (fn) {
  return (...args) => !fn(...args);
}

