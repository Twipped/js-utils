import defer from './defer.js';
import AbortError from './abort-error-exception.js';

/**
 * Generates a promise which resolves on the next animation frame.
 *
 * @function pDefer
 * @param   {Object} [options] Options
 * @param   {AbortSignal} [options.signal] Signal from an AbortController
 *
 * @returns {Promise}
 * @category Promises
 */
export default function pDefer ({ signal } = {}) {
  const fn = (passthru) => new Promise(
    (resolve, reject) => {
      if (signal && signal.aborted) {
        reject(new AbortError(signal.reason));
        return;
      }
      const dispose = defer(() => { resolve(passthru); });
      if (signal) {
        signal.addEventListener('abort', () => {
          reject(new AbortError(signal.reason));
          dispose();
        });
      }
    }
  );
  fn.then = (...args) => fn().then(...args);
  return fn;
}
