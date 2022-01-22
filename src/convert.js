
import assert from './assert.js';

/**
 * @typedef {Object} Unit
 * @property {Array<string>} names
 * @property {number} ratio
 */

/**
 * @typedef {Object<Unit>} UnitMap
 */

/**
 * Convert a value from one unit to another
 *
 * @param   {UnitMap} unitSet Units set to work with
 * @param   {string|number} value
 * @param   {string} from_ Source unit name
 * @param   {string} to_ Target unit name
 *
 * @returns {number}
 * @private
 */
export default function convert (unitSet, value, from_, to_ = 'meters') {
  const from = unitSet(from_);
  const to = unitSet(to_);
  assert(from, `Could not find a unit named "${from_}"`);
  assert(to, `Could not find a unit named "${to_}"`);
  if (typeof value === 'string') value = Number(value.replace(/(?!^-)[^0-9.]/g, ''));
  const ratio = from.ratio / to.ratio;
  return (value * ratio) + (from.difference || 0) - (to.difference || 0);
}
