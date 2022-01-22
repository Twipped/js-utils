
import {
  isArray,
  isString,
  isNumber,
  isBoolean,
  isDate,
  isFunction,
  isRegExp,
  isTruthy,
  isFalsey,
  isMap,
  isSet,
  isUndefined,
} from './types.js';
import equal from './equal.js';

/**
 * Produces a curried function that tests if the first argument
 * is an instance of the curried constructor.
 *
 * @param   {Function|Class} constructor
 *
 * @returns {Function}
 * @category Functional
 */
export const isa = (constructor) => (input) => input instanceof constructor;


const IS_LOOKUP = new Map([
  [ Array,     isArray     ],
  [ Number,    isNumber    ],
  [ String,    isString    ],
  [ Boolean,   isBoolean   ],
  [ Map,       isMap       ],
  [ Set,       isSet       ],
  [ Date,      isDate      ],
  [ RegExp,    isRegExp    ],
  [ undefined, isUndefined ],
  [ true,      isTruthy    ],
  [ false,     isFalsey    ],
]);

/**
 * Produces a function that evaluates the first argument it receives against all conditions
 * given and returns true if any of them return truthy. Can be passed type constructors
 * to confirm if the passed value is of that type. Non-function values will be compared
 * with shallow equality.
 *
 * @param   {...Function|any} conditions
 *
 * @returns {Function}
 * @category Functional
 */
export function is (...conditions) {
  conditions = conditions.flat(Infinity).map((a) =>
    (isFunction(a) && a)
    || (isRegExp(a) && re(a))
    || IS_LOOKUP.get(a)
    || ((b) => equal(a, b))
  );

  if (conditions.length === 1) return (tok) => conditions[0](tok);

  return (tok) => {
    for (const check of conditions) {
      if (check(tok)) return true;
    }
    return false;
  };
}

/**
 * Produces a function that evaluates the first argument it receives against all conditions
 * given and returns true if *all* of them return truthy. Can be passed type constructors
 * to confirm if the passed value is of that type. Non-function values will be compared
 * with shallow equality.
 *
 * @param   {...Function|any} conditions
 *
 * @returns {Function}
 * @category Functional
 */
export function isAll (...conditions) {
  conditions = conditions.flat(Infinity).map((a) =>
    (isFunction(a) && a)
    || (isRegExp(a) && re(a))
    || IS_LOOKUP.get(a)
    || ((b) => equal(a, b))
  );

  if (conditions.length === 1) return (tok) => conditions[0](tok);

  return (tok) => {
    for (const check of conditions) {
      if (!check(tok)) return false;
    }
    return true;
  };
}

/**
 * Produces a function which tests if its first argument matches the given Regular Expression
 *
 * @param   {RegExp} pattern
 *
 * @returns {Function}
 * @category Functional
 */
export function re (pattern) {
  if (isString(pattern)) pattern = new RegExp(pattern);
  return (tok) => !!String(tok).match(pattern);
}

