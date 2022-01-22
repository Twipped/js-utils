
import { isTruthy } from './types.js';
import flatten from './flatten.js';

/**
 * Tests any passed argument (or the contents of passed arrays) for truthiness.
 *
 * @param  {...any} args
 * @returns {boolean} Returns true if any of the values are truthy.
 */
export default function any (...args) {
  let input;
  if (args.length > 1) {
    input = args;
  } else {
    input = flatten(args[0], 1);
  }

  for (const value of input) {
    if (isTruthy(value)) {
      return value;
    }
  }

  return input[input.length - 1];
}
