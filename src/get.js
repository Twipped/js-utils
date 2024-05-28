import {
  isUndefined,
  isUndefinedOrNull,
  isNotUndefinedOrNull,
  isNumber,
  isString,
  isPrimitive,
} from './types.js';
import hasOwn from './hasOwn.js';
import parsePath from './parsePath.js';

const NOT_FOUND = Symbol('NOT_FOUND');
/**
 * Deeply extracts a value from a nested object structure.
 *
 * @param   {object | Array} target Structure to get a value from.
 * @param   {string|Array<string|number>} path Property Key, dot-notation path,
 * or array of key names which describes the target value.
 * @param   {any} [defaultValue] The value to return if the path
 * cannot be reached. Defaults to undefined.
 *
 * @returns {any}
 */
export default function get (target, path, defaultValue) {
  if (isUndefinedOrNull(target) || isPrimitive(target)) return defaultValue;
  if (isUndefinedOrNull(path)) return defaultValue;
  if (isNumber(path)) path = [ path.toString() ];
  else if (isString(path)) {
    if (hasOwn(target, path)) return target[path];
    path = parsePath(path);
  } else if (!Array.isArray(path)) path = [ path ];

  const result = path
    .filter((s) => isNotUndefinedOrNull(s))
    .reduce(
      (res, key) => {
        if (res === NOT_FOUND || isUndefinedOrNull(res)) return NOT_FOUND;
        return res[key];
      },
      target
    );
  return (isUndefined(result) || result === target || result === NOT_FOUND) ? defaultValue : result;
}
