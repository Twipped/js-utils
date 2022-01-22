
/**
 * A collection of values that can be iterated over
 * For strings, the string is treated as a collection of single characters.
 *
 * @typedef {string|Array|Map|Set|Iterator|Iterable|object} Collection
 * @global
 */


/**
 * A Symbol which identifies a default value.
 *
 * @type {Symbol}
 * @category Types
 */
export const DEFAULT = Symbol('DEFAULT');
export const isDefault             = (input) => input === DEFAULT;

/**
 * Tests if a given value is an Array
 *
 * @function isArray
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isArray               = Array.isArray;

/**
 * Tests if a given value is a Number
 *
 * @function isNumber
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isNumber              = (input) => typeof input === 'number' && !Number.isNaN(input);

/**
 * Tests if a given value is a Boolean
 *
 * @function isBoolean
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isBoolean             = (input) => typeof input === 'boolean';

/**
 * Tests if a given value is a String
 *
 * @function isString
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isString              = (input) => typeof input === 'string';

/**
 * Tests if a given value is a Function
 *
 * @function isFunction
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isFunction            = (input) => typeof input === 'function';

/**
 * Tests if a given value is Null
 *
 * @function isNull
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isNull                = (input) => input === null;

/**
 * Tests if a given value is Undefined
 *
 * @function isUndefined
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isUndefined           = (input) => typeof input === 'undefined';

/**
 * Tests if a given value is Undefined or Null
 *
 * @function isUndefinedOrNull
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isUndefinedOrNull     = (input) => input === null || typeof input === 'undefined';

/**
 * Tests if a given value is NOT Undefined or Null
 *
 * @function isNotUndefinedOrNull
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isNotUndefinedOrNull  = (input) => input !== null && typeof input !== 'undefined';

/**
 * Tests if a given value is an ECMA Map
 *
 * @function isMap
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isMap                 = (input) => input instanceof Map;

/**
 * Tests if a given value is an ECMA Set
 *
 * @function isSet
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isSet                 = (input) => input instanceof Set;

/**
 * Tests if a given value is an ECMA Date object
 *
 * @function isDate
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isDate                = (input) => input instanceof Date;

/**
 * Tests if a given value is a Regular Expression object
 *
 * @function isRegExp
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isRegExp              = (input) => input instanceof RegExp;

/**
 * Tests if a given value is strictly true
 *
 * @function isTrue
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isTrue                = (input) => input === true;

/**
 * Tests if a given value is strictly false
 *
 * @function isFalse
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isFalse               = (input) => input === false;

/**
 * Tests if a given value is an Array or Set
 *
 * @function isList
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isList                = (input) => isArray(input) || isSet(input);

/**
 * Tests if a given value is an Object or Map
 *
 * @function isDict
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isDict                = (input) => isObject(input) || isMap(input);

/**
 * Tests if a given value meets the Iterator interface
 *
 * @function isIterator
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isIterator            = (input) => isObject(input) && isFunction(input.next);

/**
 * Tests if a given value meets the Promise interface
 *
 * @function isNumber
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isPromise             = (input) => isObject(input) && isFunction(input.then);

const GeneratorFunction = (function* G () { yield undefined; }).constructor;

/**
 * Tests if a given value is a Generator function
 *
 * @function isNumber
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
export const isGenerator = (input) => input instanceof GeneratorFunction;

/**
 * Tests if a given value is iterable using for..of or Array.from()
 *
 * @param   {any}  input
 * @param   {boolean} strict
 *
 * @returns {boolean}
 * @category Types
 */
export function isIterable (input, strict = false) {
  if (isUndefinedOrNull(input)) return false;
  if (strict && input[Symbol.iterator] === {}[Symbol.iterator]) return false;
  if (Symbol.iterator in Object(input)) return true;
  return false;
}

/**
 * Tests if a given value is a number or is safely coerced to a number.
 *
 * @param {any} input Value to test
 *
 * @returns {boolean}
 * @category Types
 */
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

/**
 * Tests if a given value is a JavaScript primitive (strings, numbers, booleans)
 *
 * @function isPrimitive
 * @param {any} input Value to test
 * @returns {boolean}
 * @category Types
 */
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

/**
 * Tests if a given value is an object, strictly or loosely
 *
 * @param   {any}  input Value to test
 * @param   {boolean} [strict] If true, will only return true for plain objects with no prototypes.
 * This will exclude Functions and any result of Object.create().
 *
 * @returns {boolean}
 * @category Types
 */
export function isObject (input, strict = false) {
  if (!input) return false;
  if (typeof input !== 'object') return false;
  if (isArray(input)) return false;
  if (!strict) return true;
  if (!(input instanceof Object)) return false;
  if (input.constructor !== Object.prototype.constructor) return false;
  return true;
}

/**
 * Tests if a given value is a collection that can be mapped by our utilities
 *
 * @param   {any}     collection Value to be tested
 * @param   {boolean} listsOK    Pass false to exclude Arrays and Sets as valid.
 *
 * @returns {boolean}
 * @category Types
 */
export function isMappable (collection, listsOK = true) {
  return (
    (listsOK && isArray(collection)) ||
    (listsOK && isSet(collection)) ||
    isMap(collection) ||
    collection && (isObject(collection, true) || isFunction(collection))
  );
}

/**
 * Returns the total values within a given collection, regardless of collection type.
 *
 * @param   {Collection} collection Collection to be measured
 *
 * @returns {number}
 * @category Types
 */
export function sizeOf (collection) {
  if (isArray(collection) || isString(collection)) return collection.length;
  if (isSet(collection) || isMap(collection)) return collection.size;
  if (isObject(collection)) return Object.keys(collection).length;
  return !!collection;
}

/**
 * Tests if a given value is truthy, with extra logic to validate dates.
 *
 * @param   {any}  value   Value to be tested
 * @param   {boolean} [deep] If true, the function will return false for empty collections.
 *
 * @returns {boolean}
 * @category Types
 */
export function isTruthy (value, deep = false) {
  if (isDate(value)) return !Number.isNaN(value);
  if (deep && isMappable(value)) return !!sizeOf(value);
  return !!value;
}

/**
 * Tests if a given value is falsey, with extra logic to validate dates.
 *
 * @param   {any}  value   Value to be tested
 * @param   {boolean} [deep] If true, the function will return false for empty collections.
 *
 * @returns {boolean}
 * @category Types
 */
export function isFalsey (value, deep = false) {
  return !isTruthy(value, deep);
}

/**
 * Tests if the first value is greater than the second value, accepting any type
 *
 * @param   {any} a
 * @param   {any} b
 *
 * @returns {boolean}
 * @category Types
 */
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

/**
 * Tests if the first value is less than the second value, accepting any type
 *
 * @param   {any} a
 * @param   {any} b
 *
 * @returns {boolean}
 * @category Types
 */
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
