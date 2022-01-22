
/**
 * Converts a string to upper case
 *
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export default function uc (input) {
  return typeof input === 'string' ? input.toUpperCase() : input;
}
