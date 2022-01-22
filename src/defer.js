import delay from './delay.js';

/**
 * Executes the given function on next animation frame.
 *
 * @param   {Function} fn Function to invoke
 *
 * @returns {Function} Returns a disposer for the timer.
 * @category Timers
 */
export default function defer (fn) {
  if (typeof cancelAnimationFrame === 'undefined') return delay(fn, 0);
  const handle = requestAnimationFrame(fn); // eslint-disable-line no-undef
  return () => cancelAnimationFrame(handle); // eslint-disable-line no-undef
}
