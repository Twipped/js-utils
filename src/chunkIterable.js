/* global Collection */

/**
 * Produces an iterator collates the values from the given collection into chunked arrays
 *
 * @param   {Collection} input
 * @param   {number} [size=2]
 *
 * @yields {Array}
 * @returns {Array}
 * @category Iterables
 */
export default function* chunkIterable (input, size = 2) {
  const iterator = input[Symbol.iterator]();
  let chnk = [];
  let next;
  while (!(next = iterator.next()).done) {
    chnk.push(next.value);
    if (chnk.length === size) {
      yield chnk;
      chnk = [];
    }
  }
  return chnk;
}
