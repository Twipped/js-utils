/**
 * Executes the given function after `time` milliseconds.
 *
 * @alias timeout
 * @param   {Function} fn Function to invoke
 * @param   {number} time Duration in milliseconds
 *
 * @returns {Function} Returns a disposer for the timer.
 * @category Timers
 */
export default function delay (fn, time) {
  const handle = setTimeout(fn, time);
  return () => clearTimeout(handle);
}
