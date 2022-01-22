
import { is } from './is.js';
import {
  isArray,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isMappable,
  isPrimitive,
  isFunction,
  isRegExp,
  isTruthy,
  isFalsey,
} from './types.js';

/**
 * Produces a function which evaluates a set of functions against
 * all items in an array and returns true if all of the function evaluate truthy.
 *
 * @param   {...Function} args
 * @returns {Function}
 * @category Functional
 */
export function isArrayOf (...args) {
  const predicate = is(...args);
  return (tok) => {
    if (!isArray(tok)) return false;
    for (const item of tok) {
      if (!predicate(item)) return false;
    }
    return true;
  };
}

/**
 * @function isArrayOfArrays
 *
 * @returns {boolean} Returns true if all items in the array are arrays.
 */
export const isArrayOfArrays =     /* #__PURE__*/isArrayOf(isArray);

/**
 * @function isArrayOfStrings
 *
 * @returns {boolean} Returns true if all items in the array are strings.
 */
export const isArrayOfStrings =    /* #__PURE__*/isArrayOf(isString);

/**
 * @function isArrayOfNumbers
 *
 * @returns {boolean} Returns true if all items in the array are numbers.
 */
export const isArrayOfNumbers =    /* #__PURE__*/isArrayOf(isNumber);

/**
 * @function isArrayOfBooleans
 *
 * @returns {boolean} Returns true if all items in the array are booleans.
 */
export const isArrayOfBooleans =   /* #__PURE__*/isArrayOf(isBoolean);

/**
 * @function isArrayOfObjects
 *
 * @returns {boolean} Returns true if all items in the array are objects.
 */
export const isArrayOfObjects =    /* #__PURE__*/isArrayOf(isObject);

/**
 * @function isArrayOfMappables
 *
 * @returns {boolean} Returns true if all items in the array are mappable items.
 */
export const isArrayOfMappables =  /* #__PURE__*/isArrayOf(isMappable);

/**
 * @function isArrayOfPrimatives
 *
 * @returns {boolean} Returns true if all items in the array are strings, numbers or booleans.
 */
export const isArrayOfPrimatives = /* #__PURE__*/isArrayOf(isPrimitive);

/**
 * @function isArrayOfFunctions
 *
 * @returns {boolean} Returns true if all items in the array are functions.
 */
export const isArrayOfFunctions =  /* #__PURE__*/isArrayOf(isFunction);

/**
 * @function isArrayOfRegEx
 *
 * @returns {boolean} Returns true if all items in the array are Regular Expressions.
 */
export const isArrayOfRegEx =      /* #__PURE__*/isArrayOf(isRegExp);

/**
 * @function isArrayOfTruthy
 *
 * @returns {boolean} Returns true if all items in the array are truthy.
 */
export const isArrayOfTruthy =     /* #__PURE__*/isArrayOf(isTruthy);

/**
 * @function isArrayOfFalsey
 *
 * @returns {boolean} Returns true if all items in the array are falsey.
 */
export const isArrayOfFalsey =     /* #__PURE__*/isArrayOf(isFalsey);

/**
 * Produces a function which evaluates a set of functions against
 * all items in an array and returns true if any of the function evaluate truthy.
 *
 * @param   {...Function} args
 *
 * @returns {Function}
 * @category Functional
 */
export function contains (...args) {
  const predicate = is(...args);
  return (tok) => {
    if (!isArray(tok)) predicate(tok);
    for (const item of tok) {
      if (predicate(item)) return true;
    }
    return false;
  };
}

/**
 * @function containsArrays
 *
 * @returns {boolean} Returns true if any items in the array are arrays.
 * @category Collections
 */
export const containsArrays =     /* #__PURE__*/contains(isArray);

/**
 * @function containsStrings
 *
 * @returns {boolean} Returns true if any items in the array are strings.
 * @category Collections
 */
export const containsStrings =    /* #__PURE__*/contains(isString);

/**
 * @function containsNumbers
 *
 * @returns {boolean} Returns true if any items in the array are numbers.
 * @category Collections
 */
export const containsNumbers =    /* #__PURE__*/contains(isNumber);

/**
 * @function containsBooleans
 *
 * @returns {boolean} Returns true if any items in the array are booleans.
 * @category Collections
 */
export const containsBooleans =   /* #__PURE__*/contains(isBoolean);

/**
 * @function containsObjects
 *
 * @returns {boolean} Returns true if any items in the array are object like.
 * @category Collections
 */
export const containsObjects =    /* #__PURE__*/contains(isObject);

/**
 * @function containsMappables
 *
 * @returns {boolean} Returns true if any items in the array are mappable collections.
 * @category Collections
 */
export const containsMappables =  /* #__PURE__*/contains(isMappable);

/**
 * @function containsPrimatives
 *
 * @returns {boolean} Returns true if any items in the array are strings, numbers or booleans.
 * @category Collections
 */
export const containsPrimatives = /* #__PURE__*/contains(isPrimitive);

/**
 * @function containsFunctions
 *
 * @returns {boolean} Returns true if any items in the array are functions.
 * @category Collections
 */
export const containsFunctions =  /* #__PURE__*/contains(isFunction);

/**
 * @function containsRegEx
 *
 * @returns {boolean} Returns true if any items in the array are Regular Expressions.
 * @category Collections
 */
export const containsRegEx =      /* #__PURE__*/contains(isRegExp);

/**
 * @function containsTruthy
 *
 * @returns {boolean} Returns true if any items in the array are truthy.
 * @category Collections
 */
export const containsTruthy =     /* #__PURE__*/contains(isTruthy);

/**
 * @function containsFalsey
 *
 * @returns {boolean} Returns true if any items in the array are falsey.
 * @category Collections
 */
export const containsFalsey =     /* #__PURE__*/contains(isFalsey);

