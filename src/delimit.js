/* global Collection */

/**
 * Produces an array of all values in a given collection, delimited with the provided value.
 *
 * @param   {Collection} collection
 * @param   {any} delimiter
 *
 * @returns {Array<any>}
 */
export default function delimit (collection, delimiter) {
  if (!(Symbol.iterator in collection)) return collection;

  const iterator = collection[Symbol.iterator]();
  const result = [];
  let next;
  while ((next = iterator.next())) {
    result.push(next.value);
    if (next.done) break;
    result.push(delimiter);
  }
  return result;
}
