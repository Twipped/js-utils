
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
import { allBy, anyBy } from './anyBy';

export function isArrayOf (...args) {
  const predicate = is(...args);
  return (tok) => (isArray(tok) ? allBy(tok, predicate) : predicate(tok));
}
export function isArrayOfStrings    (input) { return allBy(input, isString); }
export function isArrayOfNumbers    (input) { return allBy(input, isNumber); }
export function isArrayOfBooleans   (input) { return allBy(input, isBoolean); }
export function isArrayOfObjects    (input) { return allBy(input, isObject); }
export function isArrayOfMappables  (input) { return allBy(input, isMappable); }
export function isArrayOfPrimatives (input) { return allBy(input, isPrimitive); }
export function isArrayOfFunctions  (input) { return allBy(input, isFunction); }
export function isArrayOfRegEx      (input) { return allBy(input, isRegExp); }
export function isArrayOfTruthy     (input) { return allBy(input, isTruthy); }
export function isArrayOfFalsey     (input) { return allBy(input, isFalsey); }

export function contains (...args) {
  const predicate = is(...args);
  return (tok) => (isArray(tok) ? anyBy(tok, predicate) : predicate(tok));
}
export function containsStrings    (input) { return anyBy(input, isString); }
export function containsNumbers    (input) { return anyBy(input, isNumber); }
export function containsBooleans   (input) { return anyBy(input, isBoolean); }
export function containsObjects    (input) { return anyBy(input, isObject); }
export function containsMappables  (input) { return anyBy(input, isMappable); }
export function containsPrimatives (input) { return anyBy(input, isPrimitive); }
export function containsFunctions  (input) { return anyBy(input, isFunction); }
export function containsRegEx      (input) { return anyBy(input, isRegExp); }
export function containsTruthy     (input) { return anyBy(input, isTruthy); }
export function containsFalsey     (input) { return anyBy(input, isFalsey); }

