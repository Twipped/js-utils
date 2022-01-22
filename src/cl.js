
/**
 * Generates a css className string given an array of classNames
 *
 * @param   {...string|Array<string>} classNames
 *
 * @returns {string}
 * @category Text
 */
export default function cl (...classNames) {
  return classNames.flat(Infinity).filter(Boolean).join(' ');
}
