import { isTruthy } from './types.js';

/**
 * Given a set of promises, resolves with the first truthy result, or the last result to resolve.
 *
 * @param   {...Promise} promises
 *
 * @returns {Promise}
 * @category Promises
 */
export default async function pCoalesce (...promises) {
  promises = promises.flat(Infinity);
  let count = promises.length;
  return new Promise((resolve, reject) => {
    const fin = (res) => {
      if (isTruthy(res) || count <= 0) {
        resolve(res);
        return;
      }
      count--;
    };

    for (const p of promises) {
      p.then(fin, reject);
    }
  });
}
