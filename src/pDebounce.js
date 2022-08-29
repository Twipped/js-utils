import { isFunction } from './types.js';

/**
 * Produces a promise aware debounced function that delays invoking `func` until
 * after `wait` milliseconds have elapsed since the last time the debounced
 * function was invoked.
 *
 * @param   {Function} func
 * @param   {number}   wait
 * @param   {Object}   options
 * @param   {boolean}  options.leading
 * @param   {number}   options.maxWait
 * @param   {*}        options.context
 *
 * @returns {Function}
 */
export default function pDebounce (func, wait = 0, {
  leading = false,
  maxWait = 0,
  context,
} = {}) {
  let startTime;
  let lastInvocation;
  let timer;
  let deferred;
  let lastArgs;

  return async function debounced (...args) {
    const delay = isFunction(wait) ? wait() : wait;
    const maxDelay = isFunction(maxWait) ? maxWait() : maxWait;
    const now = Date.now();
    if (!startTime) startTime = now;

    const isCold = !lastInvocation || (now - lastInvocation) > delay;

    lastInvocation = now;

    const totalTime = now - startTime;
    const overtime = maxDelay <= 0 ? 0 : Math.max(0, totalTime - maxDelay);

    if (isCold && leading) {
      return func.call(context || this, ...args);
    }

    if (deferred) {
      clearTimeout(timer);
    } else {
      deferred = pmis();
    }

    lastArgs = args;

    if (overtime) {
      return flush();
    }

    timer = setTimeout(flush.bind(this), delay - overtime);

    return deferred.promise;
  };

  // eslint-disable-next-line jsdoc/require-jsdoc
  function flush () {
    const p = deferred.promise;
    clearTimeout(timer);

    Promise.resolve(func.apply(this, lastArgs))
      .then(deferred.resolve, deferred.reject);

    lastArgs = [];
    deferred = null;
    lastInvocation = null;
    startTime = null;
    return p;
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
function pmis () {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}

