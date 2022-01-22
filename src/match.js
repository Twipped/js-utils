import uc from './uc.js';
import { isFunction, isObject, isString } from './types.js';
import iteratee from './iteratee.js';

/**
 * This callback is a returned event listener
 *
 * @callback predicateOf
 * @param {any} tok
 * @returns {boolean} Returns true if the passed value matches the criteria.
 */

/**
 * Produces the predicateOf function
 *
 * @private
 * @param  {Function|string|number|object} criteria
 * @returns {predicateOf}
 * @category Functional
 */
export default function match (criteria) {
  if (isFunction(criteria)) return criteria;
  if (isObject(criteria)) {
    if (criteria.$) return iteratee(criteria.$);
    return iteratee(criteria);
  }
  if (isString(criteria)) return (tok) => uc(tok) === uc(criteria);
  return (tok) => tok === criteria;
}
