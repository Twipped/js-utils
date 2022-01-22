/* global Collection */

import {
  isMappable,
} from './types.js';

import reduce from './reduce.js';
import slice from './slice.js';

/**
 * Creates an array with all nested collections concatenated recursively into one layer.
 *
 * @param   {Collection} collection
 * @param   {number} depth
 *
 * @returns {Array}
 */
export default function flatten (collection, depth = Infinity) {
  if (!isMappable(collection)) return [ collection ];
  if (depth <= 0) return slice(collection);
  return reduce(collection,
    (acc, val) => acc.concat(...(
      isMappable(val)
        ? flatten(val, depth - 1)
        : [ val ]
    )),
    []
  );
}
