
import { is } from './is';
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
} from './isType';

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
export const isArrayofArrays =     isArrayOf(isArray);
export const isArrayOfStrings =    isArrayOf(isString);
export const isArrayOfNumbers =    isArrayOf(isNumber);
export const isArrayOfBooleans =   isArrayOf(isBoolean);
export const isArrayOfObjects =    isArrayOf(isObject);
export const isArrayOfMappables =  isArrayOf(isMappable);
export const isArrayOfPrimatives = isArrayOf(isPrimitive);
export const isArrayOfFunctions =  isArrayOf(isFunction);
export const isArrayOfRegEx =      isArrayOf(isRegExp);
export const isArrayOfTruthy =     isArrayOf(isTruthy);
export const isArrayOfFalsey =     isArrayOf(isFalsey);

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
export const containsArrays =     contains(isArray);
export const containsStrings =    contains(isString);
export const containsNumbers =    contains(isNumber);
export const containsBooleans =   contains(isBoolean);
export const containsObjects =    contains(isObject);
export const containsMappables =  contains(isMappable);
export const containsPrimatives = contains(isPrimitive);
export const containsFunctions =  contains(isFunction);
export const containsRegEx =      contains(isRegExp);
export const containsTruthy =     contains(isTruthy);
export const containsFalsey =     contains(isFalsey);

