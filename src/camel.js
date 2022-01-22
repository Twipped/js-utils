

var UPPER_MATCH = /([A-Z])/g;

/**
 * Converts camelCast to hyphen-case
 *
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export function camelToHyphen (input) {
  return String(input).replace(UPPER_MATCH, '-$1').toLowerCase();
}

/**
 * Converts camelCast to snake_case
 *
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export function camelToSnake (input) {
  return String(input).replace(UPPER_MATCH, '_$1').toLowerCase();
}

/**
 * Converts camelCast to UPPER_SNAKE_CASE
 *
 * @param   {string} input
 *
 * @returns {string}
 * @category Text
 */
export function camelToUpperSnake (input) {
  return String(input).replace(UPPER_MATCH, '_$1').toUpperCase();
}
