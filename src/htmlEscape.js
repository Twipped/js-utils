
/**
 * Very dirty function to make a string HTML safe.
 * Copied from Sindre Sorhus' escape-goat
 *
 * @function htmlEscape
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export const htmlEscape = (input) => input
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
;

export default htmlEscape;
