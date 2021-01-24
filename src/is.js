
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
} from './isType';
import { isEqualTo } from './equality';
import { anyBy, allBy } from './anyBy';

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

export function is (...args) {
  args = args.flat(Infinity).map((a) =>
    (isFunction(a) && a)
    || (isRegExp(a) && re(a))
    || IS_LOOKUP.get(a)
    || isEqualTo(a),
  );
  if (args.length === 1) return (tok) => args[0](tok);
  return (tok) => anyBy(args, (check) => check(tok));
}

export function isAll (...args) {
  args = args.flat(Infinity).map((a) =>
    (isFunction(a) && a)
    || (isRegExp(a) && re(a))
    || IS_LOOKUP.get(a)
    || isEqualTo(a),
  );
  if (args.length === 1) return (tok) => args[0](tok);
  return (tok) => allBy(args, (check) => check(tok));
}

export function re (pattern) {
  if (isString(pattern)) pattern = new RegExp(pattern);
  return (tok) => !!String(tok).match(pattern);
}

