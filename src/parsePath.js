const CHUNK_MATCH = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
const ESCAPEMENT_MATCH = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} input The string to convert.
 * @returns {Array} Returns the property path array.
 */
export default function parsePath (input) {
  const result = [];
  if (input.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  input.replace(CHUNK_MATCH, (match, number, quote, subString) => {
    result.push(quote ? subString.replace(ESCAPEMENT_MATCH, '$1') : (number || match));
  });
  return result;
}
