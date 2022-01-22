/**
 * Shortcut for Promise.all which flattens the arguments given.
 *
 * @param   {...Promise} promises
 *
 * @returns {Promise}
 * @category Promises
 */
export default function pAll (...promises) {
  return Promise.all(promises.flat(1));
}
