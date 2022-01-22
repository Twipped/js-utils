
/**
 * Uppercases the first letter of every word in the given string
 *
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export default function ucwords (input) {
  return String(input).replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1));
}
