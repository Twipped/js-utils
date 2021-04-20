
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
} from './isType.js';

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
export const isArrayOfArrays =     /* #__PURE__*/isArrayOf(isArray);
export const isArrayOfStrings =    /* #__PURE__*/isArrayOf(isString);
export const isArrayOfNumbers =    /* #__PURE__*/isArrayOf(isNumber);
export const isArrayOfBooleans =   /* #__PURE__*/isArrayOf(isBoolean);
export const isArrayOfObjects =    /* #__PURE__*/isArrayOf(isObject);
export const isArrayOfMappables =  /* #__PURE__*/isArrayOf(isMappable);
export const isArrayOfPrimatives = /* #__PURE__*/isArrayOf(isPrimitive);
export const isArrayOfFunctions =  /* #__PURE__*/isArrayOf(isFunction);
export const isArrayOfRegEx =      /* #__PURE__*/isArrayOf(isRegExp);
export const isArrayOfTruthy =     /* #__PURE__*/isArrayOf(isTruthy);
export const isArrayOfFalsey =     /* #__PURE__*/isArrayOf(isFalsey);

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
export const containsArrays =     /* #__PURE__*/contains(isArray);
export const containsStrings =    /* #__PURE__*/contains(isString);
export const containsNumbers =    /* #__PURE__*/contains(isNumber);
export const containsBooleans =   /* #__PURE__*/contains(isBoolean);
export const containsObjects =    /* #__PURE__*/contains(isObject);
export const containsMappables =  /* #__PURE__*/contains(isMappable);
export const containsPrimatives = /* #__PURE__*/contains(isPrimitive);
export const containsFunctions =  /* #__PURE__*/contains(isFunction);
export const containsRegEx =      /* #__PURE__*/contains(isRegExp);
export const containsTruthy =     /* #__PURE__*/contains(isTruthy);
export const containsFalsey =     /* #__PURE__*/contains(isFalsey);

