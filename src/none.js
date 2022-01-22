
import any from './any.js';

/**
 * Tests that none of the passed argument (or the contents of passed arrays) for truthiness.
 *
 * @param  {...any} args
 * @returns {boolean} Returns true if all of the passed values are falsey
 */
export default function none (...args) {
  return !any(...args);
}
