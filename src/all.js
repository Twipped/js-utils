
import flatten from './flatten.js';
import { isTruthy } from './types.js';

/**
 * Tests all passed arguments (or the contents of passed collections) for truthiness.
 *
 * @param  {...any} args [description]
 * @returns {boolean} Returns true if all provided values are truthy
 */
export default function all (...args) {
  let input;
  if (args.length > 1) {
    input = args;
  } else {
    input = flatten(args[0], 1);
  }

  let result = input.shift();
  for (const value of input) {
    if (!isTruthy(result)) {
      return false;
    }
    result = value;
  }

  return result;
}
