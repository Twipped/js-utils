
/**
 * Returns the given value, rounded up to the nearest number provided
 *
 * @param   {number} value
 * @param   {number} [nearest] Value to round nearest to. Defaults to 1
 *
 * @returns {number}
 * @category Math
 */
export default function ceil (value, nearest = 1) {
  if (nearest <= 0 || nearest === 1) return Math.ceil(value);
  return Math.ceil(value / nearest) * nearest;
}
