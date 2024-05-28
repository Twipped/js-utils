/**
 * Shorthand, prototype safe way to test if an object's property is its own
 *
 * @param {object} target Object to check
 * @param {string} key Property key to check
 *
 * @returns {boolean}
 * @category Data
 */
export default function hasOwn (target, key) {
  return Object.hasOwn(target, key);
}
