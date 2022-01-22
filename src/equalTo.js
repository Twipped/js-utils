
import equal from './equal.js';

/**
 * Produces a curried function that evaluates if a passed value equals the curried value.
 *
 * @param   {any}  value
 *
 * @returns {boolean}
 * @category Functional
 */
export default function equalTo (value) {
  return (tok) => equal(value, tok);
}
