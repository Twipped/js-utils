
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isFunction,
  isUndefined,
  isUndefinedOrNull,
  isNotUndefinedOrNull,
  isNumber,
  isString,
  isPrimitive,
  hasOwn,
} from './isType.js';

export function clone (input) {
  return merge({}, input);
}

export function merge (...sources) {
  const result = {};
  for (const source of sources) {
    if (!source) continue;
    for (const [ key, value ] of Object.entries(source)) {
      if (isObject(value)) {
        if (isObject(result[key])) {
          result[key] = merge(result[key], value);
        } else {
          result[key] = merge(value);
        }
      } else {
        result[key] = value;
      }
    }
  }
  return result;
}

export function get (obj, path, defaultValue) {
  if (isUndefinedOrNull(obj) || isPrimitive(obj)) throw new TypeError('Input object was not a collection.');
  if (isUndefinedOrNull(path) || path === '') return false;
  if (isNumber(path)) path = [ String(path) ];
  else if (isString(path)) {
    if (hasOwn(obj, path)) return obj[path];
    path = path.split(/[,[\].]+?/);
  }

  const result = path
    .filter((s) => isNotUndefinedOrNull(s) && s !== '')
    .reduce((res, key) =>
      (isNotUndefinedOrNull(res) ? res[key] : res)
    , obj);
  return (isUndefined(result) || result === obj) ? defaultValue : result;
}

export function collect (obj, path) {
  if (isUndefinedOrNull(obj) || isPrimitive(obj)) throw new TypeError('Input object was not a collection.');
  if (isUndefinedOrNull(path) || path === '') return false;
  if (isNumber(path)) path = [ String(path) ];
  else if (isString(path)) {
    if (hasOwn(obj, path)) {
      const res = obj[path];
      if (isUndefinedOrNull(res)) return [];
      return [ res ];
    }
    path = path.split(/[,[\].]+?/);
  }
  path = path.filter((s) => isNotUndefinedOrNull(s) && s !== '');
  const maxLevel = path.length - 1;

  if (!path.length) return [];

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

  const res = desc(obj, 0);
  if (isArray(res)) return res;
  if (isUndefinedOrNull(res)) return [];
  return [ res ];
}

export function has (obj, path) {
  if (isUndefinedOrNull(path) || path === '') return false;
  if (isNumber(path)) path = [ String(path) ];
  else if (isString(path)) path = String.prototype.split.call(path, /[,[\].]+?/);
  let res = obj;
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

export function set (obj, path, value) {
  if (isUndefinedOrNull(path) || path === '') return false;
  if (isNumber(path)) path = [ String(path) ];
  else if (isString(path)) {
    if (hasOwn(obj, path)) {
      obj[path] = value;
      return obj;
    }
    path = path.split(/[,[\].]+?/);
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
    }, obj);

  return obj;
}


export function mapper (map) {
  map = map.map(([ target, origin, transform ]) => {
    if (typeof target === 'function') return target;

    if (origin === null || origin === true || origin === false) {
      return (input, output) => { set(output, target, origin); };
    }
    if (typeof origin === 'function') {
      if (typeof transform === 'function') {
        return (input, output, ...args) => { set(output, target, transform(origin(input, ...args))); };
      }
      return (input, output, ...args) => { set(output, target, origin(input, ...args)); };
    }
    if (typeof origin === 'string') {
      if (typeof transform === 'function') {
        return (input, output, ...args) => { set(output, target, transform(get(input, origin), ...args)); };
      }
      return (input, output) => { set(output, target, get(input, origin)); };
    }
    return (input, output) => { set(output, target, get(input, target)); };
  });


  return (source, ...args) => {
    const result = {};
    for (const fn of map) {
      fn(source, result, ...args);
    }
    return result;
  };
}
