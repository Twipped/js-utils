/* eslint no-console: 0, jsdoc/check-param-names:0, jsdoc/require-param:0, jsdoc/require-returns:0 */

import {
  isArray,
  isObject,
  isNumber,
  isString,
} from './types.js';

/**
 * Tests if the first argument is truthy, and throws the passed message if it is not.
 *
 * @param   {any}    ok      Value to test for truthiness
 * @param   {string} message Message to be thrown on failure. `%s` placeholders are replaced
 * in sequence with the arguments provided after the message.
 * @param   {...any} substitutions Values to inject into the message on failure.
 *
 * @throws Error
 * @category Errors
 */
export default function assert (ok, message, ...substitutions) {
  if (ok) return;

  if (substitutions.length) {
    let argIndex = 0;
    message = message.replace(/%s/g, () => substitutions[argIndex++]);
  }

  const error = new Error(`Assertion Failed: \n${message}`);
  error.framesToPop = 1; // ignore the assert call itself.
  throw error;
}

/**
 * Throws an Error with the given message
 *
 * @param   {string} message Message to be thrown on failure. `%s` placeholders are replaced
 * in sequence with the arguments provided after the message.
 * @param   {...any} substitutions Values to inject into the message on failure.
 *
 * @category Errors
 */
export const fail = /* #__PURE__ */(...args) => assert(false, ...args);


/**
 * Tests if the first argument is an array, and throws the passed message if it is not.
 *
 * @param   {any}    ok      Value to test for truthiness
 * @param   {string} message Message to be thrown on failure. `%s` placeholders are replaced
 * in sequence with the arguments provided after the message.
 * @param   {...any} substitutions Values to inject into the message on failure.
 *
 * @throws Error
 * @category Errors
 */
export const assertIsArray = /* #__PURE__ */(ok, ...args) => assert(isArray(ok), ...args);

/**
 * Tests if the first argument is object like, and throws the passed message if it is not.
 *
 * @param   {any}    ok      Value to test for truthiness
 * @param   {string} message Message to be thrown on failure. `%s` placeholders are replaced
 * in sequence with the arguments provided after the message.
 * @param   {...any} substitutions Values to inject into the message on failure.
 *
 * @throws Error
 * @category Errors
 */
export const assertIsObject = /* #__PURE__ */(ok, ...args) => assert(isObject(ok), ...args);

/**
 * Tests if the first argument is a plain object, and throws the passed message if it is not.
 *
 * @param   {any}    ok      Value to test for truthiness
 * @param   {string} message Message to be thrown on failure. `%s` placeholders are replaced
 * in sequence with the arguments provided after the message.
 * @param   {...any} substitutions Values to inject into the message on failure.
 *
 * @throws Error
 * @category Errors
 */
export const assertIsPlainObject = /* #__PURE__ */(ok, ...args) => assert(isObject(ok, true), ...args); // eslint-disable-line max-len

/**
 * Tests if the first argument is a string, and throws the passed message if it is not.
 *
 * @param   {any}    ok      Value to test for truthiness
 * @param   {string} message Message to be thrown on failure. `%s` placeholders are replaced
 * in sequence with the arguments provided after the message.
 * @param   {...any} substitutions Values to inject into the message on failure.
 *
 * @throws Error
 * @category Errors
 */
export const assertIsString = /* #__PURE__ */(ok, ...args) => assert(isString(ok), ...args);

/**
 * Tests if the first argument is a number, and throws the passed message if it is not.
 *
 * @param   {any}    ok      Value to test for truthiness
 * @param   {string} message Message to be thrown on failure. `%s` placeholders are replaced
 * in sequence with the arguments provided after the message.
 * @param   {...any} substitutions Values to inject into the message on failure.
 *
 * @throws Error
 * @category Errors
 */
export const assertIsNumber = /* #__PURE__ */(ok, ...args) => assert(isNumber(ok), ...args);
