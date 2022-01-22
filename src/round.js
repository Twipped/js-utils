
/**
 * Returns the given value, rounded to the nearest number provided
 *
 * @param   {number} value
 * @param   {number} [nearest] Value to round nearest to. Defaults to 1
 *
 * @returns {number}
 * @category Math
 */
export default function round (value, nearest = 1) {
  if (nearest <= 0 || nearest === 1) return Math.round(value);
  return Math.round(value / nearest) * nearest;
}
