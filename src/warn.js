/* eslint no-console: 0 */
import noop from './noop.js';

/**
 * Sends an error message to the console, unless NODE_ENV is "production"
 *
 * @function warn
 * @param {...any} args Values to log
 * @category Errors
 */
const warn = process.env.NODE_ENV !== 'production'
  ? (...args) => {
    console.error(...args);
  }
  : noop;

export default warn;
