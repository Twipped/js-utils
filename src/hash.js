/* eslint no-bitwise: 0 */
import {
  isString,
  isObject,
  isNumeric,
} from './types.js';

/**
 * Generates a 32bit hash representation of the value passed, similar to md5.
 * This code is browser safe and works on all runtimes, as opposed to the
 * WebCrypto.subtle api, which only works on greenfield browsers in HTTPS.
 *
 * @param {any} input Value to be hashed
 *
 * @returns {number}
 * @category Data
 */
export default function hash (input) {
  if (!input) return 0;
  if (!isString(input)) {
    if (isObject(input)) {
      if (input.valueOf !== Object.prototype.valueOf) input = input.valueOf();
      else if (input.toString !== Object.prototype.toString) input = input.toString();
      else input = JSON.stringify(input);
    }
    if (isNumeric(input)) return Number(input);
  }
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    const chr   = input.charCodeAt(i);
    h  = ((h << 5) - h) + chr;
    h |= 0; // Convert to 32bit integer
  }
  return h;
}
