
/**
 * Returns the given value, rounded down to the nearest number provided
 *
 * @param   {number} value
 * @param   {number} [nearest] Value to round nearest to. Defaults to 1
 *
 * @returns {number}
 * @category Math
 */
export default function floor (value, nearest = 1) {
  if (nearest <= 0 || nearest === 1) return Math.floor(value);
  return Math.floor(value / nearest) * nearest;
}
