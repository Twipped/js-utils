/**
 * Converts a string to lower case
 *
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export default function lc (input) {
  return typeof input === 'string' ? input.toLowerCase() : input;
}
