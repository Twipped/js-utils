import {
  isObject,
} from './types.js';

/**
 * Combines multiple objects into one, recursively.
 *
 * @param   {...object} sources Objects to copy.
 *
 * @returns {object}
 * @category Data
 */
export default function merge (...sources) {
  const result = {};
  for (const source of sources) {
    if (!source) continue;
    for (const [ key, value ] of Object.entries(source)) {
      if (isObject(value)) {
        if (isObject(result[key])) {
          result[key] = merge(result[key], value);
        } else {
          result[key] = merge(value);
        }
      } else {
        result[key] = value;
      }
    }
  }
  return result;
}
