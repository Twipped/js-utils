
/**
 * Given a set of promises, resolves with the first value to resolve or reject
 *
 * @param   {...Promise} promises
 *
 * @returns {Promise}
 * @category Promises
 */
export default async function pRace (...promises) {
  promises = promises.flat(Infinity);
  if (Promise.race) return Promise.race(promises);
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      p.then(resolve, reject);
    }
  });
}
