
/**
 * Returns a callback that ensures the given function is not called
 * more often than `duration` milliseconds.
 *
 * @param {(...args: any) => void} fn
 * @param {number} duration
 * @returns {(...args: any) => void}
 */
export default function throttle (fn, duration) {
  var lastTime = 0;
  return function (...args) {
    var now = new Date();
    if (now - lastTime >= duration) {
      fn(...args);
      lastTime = now;
    }
  };
}
