/* global Collection */

import entries from './entries.js';

/**
 * Converts a collection into an array of key/value tuples.
 *
 * @param   {Collection} input
 *
 * @returns {Array<Array<any,any>>}
 */
export default function toPairs (input) {
  return input && Array.from(entries(input));
}
