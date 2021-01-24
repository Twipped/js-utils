
import {
  isArray,
  isObject,
  isNumber,
  isString,
} from './isType';

export function assert (ok, message) {
  if (!ok) throw new TypeError(message);
}

assert.isArray       = (ok, message) => assert(isArray(ok), message);
assert.isObject      = (ok, message) => assert(isObject(ok), message);
assert.isPlainObject = (ok, message) => assert(isObject(ok, true), message);
assert.isString      = (ok, message) => assert(isString(ok), message);
assert.isNumber      = (ok, message) => assert(isNumber(ok), message);
