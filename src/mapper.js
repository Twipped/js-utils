
import set from './set.js';
import get from './get.js';

/**
 * Produces a function to remap an object structure.
 * TODO: Explain how to use this.
 *
 * @param   {Array<Array>} map
 *
 * @returns {Function}
 * @category Data
 */
export default function mapper (map) {
  map = map.map(([ target, origin, transform ]) => {
    if (typeof target === 'function') return target;

    if (origin === null || origin === true || origin === false) {
      return (input, output) => { set(output, target, origin); };
    }
    if (typeof origin === 'function') {
      if (typeof transform === 'function') {
        return (input, output, ...args) => { set(output, target, transform(origin(input, ...args))); };
      }
      return (input, output, ...args) => { set(output, target, origin(input, ...args)); };
    }
    if (typeof origin === 'string') {
      if (typeof transform === 'function') {
        return (input, output, ...args) => { set(output, target, transform(get(input, origin), ...args)); };
      }
      return (input, output) => { set(output, target, get(input, origin)); };
    }
    return (input, output) => { set(output, target, get(input, target)); };
  });


  return (source, ...args) => {
    const result = {};
    for (const fn of map) {
      fn(source, result, ...args);
    }
    return result;
  };
}
