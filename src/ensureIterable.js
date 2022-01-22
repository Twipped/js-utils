import {
  isIterator,
  isIterable,
} from './types.js';
import nullIterator from './nullIterator.js';

/**
 * Given a potentially iterable value, ensures the result is always an iterator.
 *
 * @param   {Iterable} it Iterable value
 *
 * @returns {Iterator}
 * @category Iterables
 */
export default function ensureIterable (it) {
  if (isIterable(it)) return it;
  if (isIterator(it) && !isIterable(it)) return (function* () { yield it.next(); }());
  return nullIterator();
}
