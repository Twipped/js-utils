
import { isUndefinedOrNull } from './types.js';

/**
 * Returns true if the given value is outside of the minimum and maximum values
 *
 * @param   {number|Date}  value
 * @param   {number|Date}  vmin
 * @param   {number|Date}  vmax
 *
 * @returns {boolean}
 * @category Math
 */
export default function isNotBetween (value, vmin, vmax) {
  if (isUndefinedOrNull(vmin)) vmin = -Infinity;
  if (isUndefinedOrNull(vmax)) vmax = Infinity;
  return value > vmin && value < vmax;
}
