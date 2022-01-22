/**
 * Executes the given function and always returns a promise, even if the function is synchronous.
 *
 * @param   {Function}  fn
 * @param   {...any} args Arguments
 *
 * @returns {Promise}
 * @category Promises
 */
export default function pTry (fn, ...args) {
  try {
    return Promise.resolve(fn(...args));
  } catch (err) {
    return Promise.reject(err);
  }
}
