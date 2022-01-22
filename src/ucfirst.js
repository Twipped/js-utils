
/**
 * Uppercases the first letter of the given string
 *
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export default function ucfirst (input) {
  input = String(input);
  return input.charAt(0).toUpperCase() + input.slice(1);
}
