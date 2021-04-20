
import { truthy } from './isType.js';
import { flatten } from './collections.js';

export function all (...args) {
  let input;
  if (args.length > 1) {
    input = args;
  } else {
    input = flatten(args[0], 1);
  }

  let result = input.shift();
  for (const value of input) {
    if (!truthy(result)) {
      return false;
    }
    result = value;
  }

  return result;
}

export function any (...args) {
  let input;
  if (args.length > 1) {
    input = args;
  } else {
    input = flatten(args[0], 1);
  }

  for (const value of input) {
    if (truthy(value)) {
      return value;
    }
  }

  return input[input.length - 1];
}

export function none (...args) {
  return !any(...args);
}
