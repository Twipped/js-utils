/* global Collection */

import uniq from './uniq.js';
import filter from './filter.js';
import includes from './includes.js';

/**
 * Produces an array of all values which exist in all the collections passed.
 *
 * @param   {...Collection} collections
 * @returns {Array<any>}
 */
export default function intersect (...collections) {
  return uniq(collections.reduce(
    (a, b) => filter(a,
      (v) => includes(b, v)
    )
  ));
}
