
/**
 * Uppercases the first letter of every sentence in the given string
 *
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export default function ucsentence (input) {
  return String(input).replace(/((?:\S[^.?!]*)[.?!]*)/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
