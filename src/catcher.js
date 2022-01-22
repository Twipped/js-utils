
import noop from './noop.js';
import warn from './warn.js';

/**
 * Executes the given function immediately. If the function throws or rejects, then
 * the error is caught and sent to the console.
 *
 * @param   {Function} fn
 *
 * @returns {void}
 * @category Promises
 */
export default function catcher (fn) {
  try {
    const res = fn();
    if (res && typeof res.then === 'function') {
      return res.then(noop, (e) => warn(e));
    }
    return res;
  } catch (e) {
    warn(e);
    return undefined;
  }
}
