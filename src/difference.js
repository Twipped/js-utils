/* global Collection */

import uniq from './uniq.js';
import filter from './filter.js';
import includes from './includes.js';

/**
 * Produces an array of all values which do not exist in all collections passed.
 *
 * @param   {...Collection} collections
 * @returns {Array<any>}
 */
export default function difference (...collections) {
  return uniq(collections.reduce(
    (a, b) => filter(a,
      (c) => !includes(b, c)
    )
  ));
}
