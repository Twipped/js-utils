/* global predicateOf */

import uc from './uc.js';
import anyBy from './anyBy.js';
import match from './match.js';

/**
 * Produces a predicate function that confirms the value to the predicate matches
 * any of the criteria given to anyOf. Criteria may be a string or number to match directly,
 * a boolean returning function, an iteratee object, or an array of the above.
 *
 * @param  {...Function|string|number|object|Array<Function|any>} criteria
 * @returns {predicateOf}
 * @category Functional
 */
export default function anyOf (...criteria) {
  criteria = criteria.flat(Infinity).map(uc);
  if (criteria.length === 1) return match(criteria[0]);
  criteria = criteria.map(match);
  return (tok) => anyBy(criteria, (check) => check(tok));
}
