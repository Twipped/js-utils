
import { iteratee } from './functions.js';
import { entries } from './iterators.js';

/**
 * This module is for functions which require multiple other modules and thus cannot be included elsewhere
 * due to circular dependencies
 */


export function threepiece (collection, predicate) {
  predicate = iteratee(predicate);

  let prev, current, next;
  let index = -2;
  const results = [];

  for (const value of entries(collection)) {
    index++;
    prev = current;
    current = next;
    next = value;
    if (index >= 0) results.push(predicate(prev, current, next, index));
  }

  if (index > -2) results.push(predicate(current, next, undefined, index + 1));

  return results;
}
