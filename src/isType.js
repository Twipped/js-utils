
export const DEFAULT = Symbol('DEFAULT');

export const isDefault             = (input) => input === DEFAULT;
export const isArray               = Array.isArray;
export const isNumber              = (input) => typeof input === 'number' && !isNaN(input);
export const isBoolean             = (input) => typeof input === 'boolean';
export const isString              = (input) => typeof input === 'string';
export const isFunction            = (input) => typeof input === 'function';
export const isNull                = (input) => input === null;
export const isUndefined           = (input) => typeof input === 'undefined';
export const isUndefinedOrNull     = (input) => input === null || typeof input === 'undefined';
export const isNotUndefinedOrNull  = (input) => input !== null && typeof input !== 'undefined';
export const isMap                 = (input) => input instanceof Map;
export const isSet                 = (input) => input instanceof Set;
export const isDate                = (input) => input instanceof Date;
export const isRegExp              = (input) => input instanceof RegExp;
export const isTrue                = (input) => input === true;
export const isTruthy              = (input) => !!input;
export const isFalsey              = (input) =>  !input;
export const isFalse               = (input) => input === false;
export const isList                = (input) => isArray(input) || isSet(input);
export const isDict                = (input) => isObject(input) || isMap(input);
export const isIterator            = (input) => isObject(input) && isFunction(input.next);
export const isPromise             = (input) => isObject(input) && isFunction(input.then);

export function isIterable (input, strict = false) {
  if (isUndefinedOrNull(input)) return false;
  if (strict && input[Symbol.iterator] === {}[Symbol.iterator]) return false;
  if (Symbol.iterator in Object(input)) return true;
  return false;
}

export function isNumeric (input) {
  if (isNumber(input)) return true;
  input = String(input);
  if (input.includes('.') || input[0] === '0') {
    // we have to do this the hard way
    return !!input.match(/^-?\d+(?:\.\d+)$/);
  }

  // the easy way
  return String(Number(input)) === input;
}

const GeneratorFunction = (function* () { yield undefined; }).constructor;
export const isGenerator = (input) => input instanceof GeneratorFunction;

export function isPrimitive (input) {
  switch (typeof input) {
  case 'string':
  case 'number':
  case 'boolean':
    return true;
  default:
    return false;
  }
}

export function isObject (input, strict = false) {
  if (!input) return false;
  if (typeof input !== 'object') return false;
  if (isArray(input)) return false;
  if (!strict) return true;
  if (!(input instanceof Object)) return false;
  if (input.constructor !== Object.prototype.constructor) return false;
  return true;
}

export function isMappable (collection, arrays = true) {
  return (
    (arrays && isArray(collection)) ||
    (arrays && isSet(collection)) ||
    isMap(collection) ||
    collection && (isObject(collection, true) || isFunction(collection))
  );
}

export function hasOwn (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function sizeOf (collection) {
  if (isArray(collection) || isString(collection)) return collection.length;
  if (isSet(collection) || isMap(collection)) return collection.size;
  if (isObject(collection)) return Object.keys(collection).length;
  return !!collection;
}

export function empty (collection, strict) {
  if (isString(collection)) return !collection.length;

  if (!strict) {
    if (isArray(collection)) return !collection.length;
    if (isSet(collection) || isMap(collection)) return !collection.size;
  }

  if (strict && isArray(collection)) {
    for (const item of collection) {
      if (!isUndefined(item)) return false;
    }
    return true;
  }

  if (strict && isSet(collection)) {
    for (const item of collection) {
      if (!isUndefined(item)) return false;
    }
    return true;
  }

  if (strict && isMap(collection)) {
    for (const item of collection.values()) {
      if (!isUndefined(item)) return false;
    }
    return true;
  }

  if (isObject(collection)) {
    for (const prop in collection) { // eslint-disable-line no-restricted-syntax
      if ((strict && !isUndefined(collection[prop])) || hasOwn(collection, prop)) return false;
    }
    return true;
  }
}

export function truthy (value) {
  if (isDate(value)) return !isNaN(value);
  if (isMappable(value)) return !!sizeOf(value);
  return !!value;
}

export function falsey (value) {
  return !truthy(value);
}

export function gt (a, b) {
  if (isUndefinedOrNull(a)) a = 0;
  if (isUndefinedOrNull(b)) b = 0;
  if (isObject(a) && a.valueOf !== Object.prototype.valueOf) a = a.valueOf();
  if (isObject(b) && b.valueOf !== Object.prototype.valueOf) b = b.valueOf();
  if ((isNumber(a) && isNumber(b))) return a > b;
  if (isNumeric(b)) return Number(a) > Number(b);
  if (isString(b)) return String(a) > String(b);
  return false;
}

export function lt (a, b) {
  if (isUndefinedOrNull(a)) a = 0;
  if (isUndefinedOrNull(b)) b = 0;
  if (isObject(a) && a.valueOf !== Object.prototype.valueOf) a = a.valueOf();
  if (isObject(b) && b.valueOf !== Object.prototype.valueOf) b = b.valueOf();
  if ((isNumber(a) && isNumber(b))) return a < b;
  if (isNumeric(b)) return Number(a) < Number(b);
  if (isString(b)) return String(a) < String(b);
  return false;
}

export function hash (input) {
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
  for (let i = 0; i < input.length; i++) {
    const chr   = input.charCodeAt(i);
    h  = ((h << 5) - h) + chr;
    h |= 0; // Convert to 32bit integer
  }
  return h;
}
