import warn from './warn.js';

/**
 * Identical to `assert`, except it sends to console rather than throwing.
 * If process.env.NODE_ENV is "production", nothing happens.
 *
 * @function warning
 * @param {any} ok Value to test
 * @param {...any} args Values to log
 * @returns {void}
 * @category Errors
 */
const warning = (ok, ...args) => !ok && warn(...args);

export default warning;
