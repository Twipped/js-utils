/* eslint no-console: 0 */

import {
  isArray,
  isObject,
  isNumber,
  isString,
} from './isType';
import { noop } from './functions';

export function assert (ok, message, ...args) {
  if (ok) return;

  if (args.length) {
    let argIndex = 0;
    message = message.replace(/%s/g, () => args[argIndex++]);
  }

  const error = new Error('Assertion Failed: \n' + message);
  error.framesToPop = 1; // ignore the assert call itself.
  throw error;
}

assert.fail          = (...args) => assert(false, ...args);
assert.isArray       = (ok, ...args) => assert(isArray(ok), ...args);
assert.isObject      = (ok, ...args) => assert(isObject(ok), ...args);
assert.isPlainObject = (ok, ...args) => assert(isObject(ok, true), ...args);
assert.isString      = (ok, ...args) => assert(isString(ok), ...args);
assert.isNumber      = (ok, ...args) => assert(isNumber(ok), ...args);

export const warning = process.env.NODE_ENV === 'production'
  ? (ok, ...args) => {
    if (!ok) (console.trace || console.error)(...args);
  }
  : noop;
