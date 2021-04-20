
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
} from './isType.js';

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

function compare (a, b) {
  if (a === b) return true;
  if (isNaN(a) && isNaN(b)) return true;
  if ((!a || !b) || typeof a !== typeof b) return false;

  if (isRegExp(a) && isRegExp(b)) return a.source === b.source && a.flags === b.flags;

  if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
  if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
  return false;
}

export function is (...args) {
  args = args.flat(Infinity).map((a) =>
    (isFunction(a) && a)
    || (isRegExp(a) && re(a))
    || IS_LOOKUP.get(a)
    || ((b) => compare(a, b)),
  );

  if (args.length === 1) return (tok) => args[0](tok);

  return (tok) => {
    for (const check of args) {
      if (check(tok)) return true;
    }
    return false;
  };
}

export function isAll (...args) {
  args = args.flat(Infinity).map((a) =>
    (isFunction(a) && a)
    || (isRegExp(a) && re(a))
    || IS_LOOKUP.get(a)
    || ((b) => compare(a, b)),
  );

  if (args.length === 1) return (tok) => args[0](tok);

  return (tok) => {
    for (const check of args) {
      if (!check(tok)) return false;
    }
    return true;
  };
}

export function re (pattern) {
  if (isString(pattern)) pattern = new RegExp(pattern);
  return (tok) => !!String(tok).match(pattern);
}

