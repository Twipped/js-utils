import {
  isMap,
  isSet,
  isArray,
  isObject,
  isFunction,
  isUndefinedOrNull,
  isNumber,
  isString,
  isPrimitive,
} from './types.js';
import get from './get.js';

/**
 * When undefined or null is passed as the predicate, it will
 * return true on all iterations.
 *
 * @typedef {null|undefined} NullPredicate
 * @global
 */

/**
 * When a string is passed as a predicate, it is compared to the iterate
 * value based upon the type of the value.
 *
 * Array: iValue.includes(predicate)
 * Map: iValue.get(predicate)
 * Set: iValue.has(predicate)
 * Object: get(iValue, predicate)
 * string: iValue == predicate
 * number: iValue == predicate
 * boolean: iValue == predicate
 *
 * Otherwise it returns false
 *
 * @typedef {string} StringPredicate
 * @global
 */

/**
 * When a number is passed as a predicate, it is compared to the iterate
 * value based upon the type of the value.
 *
 * Array: iValue.includes(predicate)
 * Map: iValue.get(predicate)
 * Set: iValue.has(predicate)
 * Object: iValue[predicate]
 * string: Number(iValue) === predicate
 * number: iValue === predicate
 *
 * Otherwise it returns false
 *
 * @typedef {number} NumberPredicate
 * @global
 */

/**
 * When passing an array as a predicate, it's behavior varies according
 * to the data type of the iterate value to be matched against.
 *
 * When matching against an array, an ES Map, or an object, the predicate
 * is treated as a key/value pair. A comparison value is pulled from
 * the iterate value using the first element of the array, and strict tested
 * against the second element in the array.
 *
 * ```
 * get(iValue, predicate[0]) === predicate[1]
 * ```
 *
 * When matching against a string, number, or boolean, the predicate
 * will return true if the array contains the iterate value.
 *
 * When matching against an ES Set, it will return true if any of the
 * array's values exist in the set.
 *
 * For any other type it returns false
 *
 * @typedef {Array} ArrayPredicate
 * @global
 */

/**
 * When a plain object is provided, it is treated as a set of keys
 * and values to match against on the iterate values. Each key/value
 * pair will be tested against the iterate value. If the iterate value
 * is not an array, object or ES Map, the predicate returns false.
 *
 * Array: iValue[key] === value
 * Object: get(iValue, key) === value
 * Map: iValue.get(key) === value
 *
 * @typedef {Object} ObjectPredicate
 * @global
 */

/**
 * When a function is passed as a predicate, it is invoked for each
 * iterate value with three arguments provided.
 *
 * @callback FunctionPredicate
 * @param {any} value The iterate value
 * @param {any} key   The key for the iterate value. When iterating Sets,
 * Arrays, Iterables or strings, this will be the same as the index.
 * @param {number} index The incrementing index of the iterate value,
 * starting from 0.
 * @global
 */

/**
 * A function or value that will be used to match against the contents of
 * a collection.
 *
 * @typedef {(
 *   NullPredicate
 *  |StringPredicate
 *  |NumberPredicate
 *  |ArrayPredicate
 *  |ObjectPredicate
 *  |FunctionPredicate
 * )} Predicate
 * @global
 */

/**
 * Produces a predicate callback function for use with iterative utilities.
 *
 * @param   {Predicate} match Iteratee predicate descriptor
 *
 * @returns {Function}
 * @category Collections
 */
export default function iteratee (match) {
  if (isUndefinedOrNull(match)) return (v) => v;

  if (isFunction(match)) return match;

  if (isString(match)) {
    return (o) => {
      if (isArray(o)) return o.includes(match);
      if (isMap(o)) return o.get(match);
      if (isSet(o)) return o.has(match);
      if (isPrimitive(o)) return o == match; // eslint-disable-line eqeqeq
      if (isObject(o)) return get(o, match);
      return false;
    };
  }

  if (isNumber(match)) {
    return (o) => {
      if (isArray(o)) return o.includes(match);
      if (isMap(o)) return o.get(match);
      if (isSet(o)) return o.has(match);
      if (isObject(o)) return o[match];
      if (isNumber(o)) return o === match;
      if (isString(o)) return Number(o) === match;
      return false;
    };
  }

  if (isArray(match)) {
    const [ key, value ] = match;
    return (o) => {
      if (isPrimitive(o)) return match.includes(o);
      if (isMap(o)) return o.get(key) === value;
      if (isSet(o)) return match.some((v) => o.has(v));
      if (isArray(o) || isObject(o)) return get(o, match) === value;
      return false;
    };
  }

  if (isObject(match, true)) {
    // create an array of key/value iteratees
    const tests = Object.entries(match).map(iteratee);
    // evaluate the object against the array
    return (o) => {
      if (isPrimitive(o) || isSet(o)) return false;
      for (const t of tests) {
        if (!t(o)) return false;
      }
      return true;
    };
  }
}
