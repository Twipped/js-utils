import {
  isArray,
  isMap,
  isSet,
  isObject,
  isUndefinedOrNull,
  isNotUndefinedOrNull,
  isNumber,
  isString,
  isPrimitive,
} from './types.js';
import hasOwn from './hasOwn.js';

/**
 * Deeply extracts multiple values from a nested object structure.
 * Functions identical to `get`, except where `get` stops with the first
 * matching path, this function will keep finding all items that match.
 * Supports using wildcards in paths to iterate over all keys of an
 * object or array.
 *
 * @param   {Object|Array} target Structure to get a value from.
 * @param   {string|Array<string|number>} path Property Key, dot-notation path,
 * or array of key names which describes the target value.
 *
 * @returns {Array}
 * @category Collections
 */
export default function collect (target, path) {
  if (isUndefinedOrNull(target) || isPrimitive(target)) throw new TypeError('Input object was not a collection.');
  if (isUndefinedOrNull(path) || path === '') return false;
  if (isNumber(path)) path = [ String(path) ];
  else if (isString(path)) {
    if (hasOwn(target, path)) {
      const res = target[path];
      if (isUndefinedOrNull(res)) return [];
      return [ res ];
    }
    path = path.split(/[,[\].]+?/);
  }
  path = path.filter((s) => isNotUndefinedOrNull(s) && s !== '');
  const maxLevel = path.length - 1;

  if (!path.length) return [];

  /**
   * Object Descender
   *
   * @param   {Object|Array} res Structure to get a value from.
   * @param   {string|Array<string|number>} level Property Key, dot-notation path,
   * or array of key names which describes the target value.
   * @private
   * @returns {Array}
   */
  function desc (res, level) {
    if (isUndefinedOrNull(res)) return [];
    if (level > maxLevel) return res;
    if (isArray(res)) return res.map((i) => desc(i, level));
    const key = path[level];
    if (key === '*') {
      const mfn = (i) => desc(i, level + 1);
      if (isArray(res)) return res.map(mfn);
      if (isMap(res) || isSet(res)) return Array.from(res.values(), mfn);
      if (isObject(res, true)) return Object.values(res).map(mfn);
      return [];
    }

    if (level === maxLevel) return res[key];
    return desc(res[key], level + 1);
  }

  const res = desc(target, 0);
  if (isArray(res)) return res;
  if (isUndefinedOrNull(res)) return [];
  return [ res ];
}
