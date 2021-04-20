
import { uc } from './text.js';
import { isFunction } from './isType.js';
import { anyBy, allBy } from './anyBy.js';
import { isEqualTo } from './equality.js';

export function anyOf (...args) {
  args = args.flat(Infinity).map(uc);
  if (!anyBy(args, isFunction)) {
    // arguments do not contain a function, so we can optimize
    if (args.length === 1) return (tok) => uc(tok) === args[0];
    return (tok) => args.includes(uc(tok));
  }

  args = args.map((a) => isFunction(a) && a || isEqualTo(a));
  if (args.length === 1) return (tok) => args[0](tok);
  return (tok) => anyBy(args, (check) => check(tok));
}

export function allOf (...args) {
  args = args.flat(Infinity).map((a) => isFunction(a) && a || isEqualTo(a));
  if (args.length === 1) return (tok) => args[0](tok);
  return (tok) => allBy(args, (check) => check(tok));
}

export function noneOf (...args) {
  args = args.flat(Infinity).map((a) => isFunction(a) && a || isEqualTo(a));
  if (args.length === 1) return (tok) => args[0](tok);
  return (tok) => !anyBy(args, (check) => check(tok));
}
