/**
 * Attempts to parse a string as JSON and fails silently, providing the fallback if given.
 *
 * @param   {string} input Text to parse.
 * @param   {any} [fallback] Value to provide if parsing fails. Defaults to undefined.
 *
 * @returns {any}
 * @category Data
 */
export default function jsonSoftParse (input, fallback = undefined) {
  if (typeof input !== 'string') return input;
  try {
    return JSON.parse(input);
  } catch (e) {
    return fallback;
  }
}
