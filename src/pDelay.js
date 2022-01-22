import delay from './delay.js';
import AbortError from './abort-error-exception.js';

/**
 * Generates a promise which resolves after a given duration.
 *
 * @function pDelay
 * @param   {number} duration Delay duration in milliseconds
 * @param   {Object} [options] Options
 * @param   {AbortSignal} [options.signal] Signal from an AbortController
 *
 * @returns {Promise}
 * @category Promises
 */
export default function pDelay (duration, { signal } = {}) {
  const fn = (passthru) => new Promise(
    (resolve, reject) => {
      if (signal && signal.aborted) {
        reject(new AbortError(signal.reason));
        return;
      }

      const dispose = delay(() => { resolve(passthru); }, duration);

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
