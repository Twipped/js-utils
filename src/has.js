
import {
  isFunction,
  isUndefined,
  isUndefinedOrNull,
  isNumber,
  isString,
} from './types.js';
import parsePath from './parsePath.js';

/**
 * Deeply searches for a value in a nested object structure and returns true
 * if a value is found.
 *
 * @param   {object | Array} target Structure to get a value from.
 * @param   {string|Array<string|number>} path Property Key, dot-notation path,
 * or array of key names which describes the target value.
 *
 * @returns {any}
 * @category Data
 */
export default function has (target, path) {
  if (isUndefinedOrNull(path) || path === '') return false;
  if (isNumber(path)) path = [ String(path) ];
  else if (isString(path)) path = parsePath(path);
  let res = target;
  for (const key of path) {
    if (
      isUndefinedOrNull(res)
      || (typeof res !== 'object' && isFunction(res))
      || isUndefined(res[key])
    ) return false;
    res = res[key];
  }
  return true;
}
