
import {
  isObject,
  isFunction,
  isUndefinedOrNull,
  isNumber,
  isString,
} from './types.js';
import hasOwn from './hasOwn.js';
import parsePath from './parsePath.js';

/**
 * Follows the given path through an object structure to set the given value,
 * creating objects within the structure as needed.
 *
 * @param {Object} target
 * @param {string|Array<string>} path
 * @param {any} value Value to set
 *
 * @returns {Object}
 * @category Data
 */
export default function set (target, path, value) {
  if (isUndefinedOrNull(path) || path === '') return false;
  if (isNumber(path)) path = [ String(path) ];
  else if (isString(path)) {
    if (hasOwn(target, path)) {
      target[path] = value;
      return target;
    }
    path = parsePath(path);
  }

  const c = path.length - 1;
  path
    .filter((s) => s || s === 0)
    .reduce((res, key, i) => {
      if (i === c) {
        res[key] = value;
        return true;
      }
      if (isObject(res[key]) || isFunction(res[key])) return res[key];
      return (res[key] = {});
    }, target);

  return target;
}
