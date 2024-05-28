import { isDate } from './types.js';

/**
 * Restricts a given value to the given minimum and maximum constraints
 *
 * @param   {number|Date} value Value to be constrained
 * @param   {number|Date} [minv] Minimum
 * @param   {number|Date} [maxv] Maximum
 * @param   {number}      [nearest] If provided, the value
 * will rounded to the nearest step value.
 *
 * @returns {number|Date}
 * @category Math
 */
export default function clamp (value, minv = -Infinity, maxv = Infinity, nearest = undefined) {
  if (value === undefined || value === null || value === '') return null;
  if (minv === undefined || minv === null || minv === '') minv = -Infinity;
  if (maxv === undefined || maxv === null || maxv === '') maxv = Infinity;

  let v = value;
  if (nearest) {
    if (v >= maxv) {
      v = maxv;
    } else if (v <= minv) {
      v = minv;
    } else {
      v = Math.round(v / nearest) * nearest;
    }
  } else {
    v = Math.max(Math.min(v, maxv), minv);
  }

  if (isDate(value)) return new Date(v);
  return v;
}
