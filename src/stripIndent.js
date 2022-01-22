/**
 * Removes excess indentation from multi-line strings. Can also be used as
 * a tag function.
 *
 * @param   {string} input Text to extract
 *
 * @returns {string}
 * @category Text
 */
export default function stripIndent (input) {
  if (Array.isArray(input)) return input.map(stripIndent).join('');
  const match = input.match(/^[^\S\n]*(?=\S)/gm);
  const indent = match && Math.min(...match.map((el) => el.length));
  if (indent) {
    const regexp = new RegExp(`^.{${indent}}`, 'gm');
    input = input.replace(regexp, '');
  }

  return input;
}
