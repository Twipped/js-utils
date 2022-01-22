
/**
 * Generates a css className string given an array of classNames, substituting
 * classes using the given map object
 *
 * @function clr
 * @param   {string|Array<string>} input
 * @param   {Object} classMap
 *
 * @returns {string}
 * @category Text
 */
export default function clr (input, classMap) {
  if (typeof input === 'string') input = input.split(' ');
  if (!Array.isArray(input)) return '';
  return input.flat(Infinity).map((c) => classMap[c] || c).filter(Boolean).join(' ');
}
