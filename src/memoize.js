
import MultiMap from './multimap.js';
import {
  isPromise,
} from './types.js';

/**
 * Produces a memoized version of the given function which will cache
 * the values the function produces. This is a promise aware function,
 * and will self-invalidate if a promise rejects.
 *
 * @param   {Function} fn
 * @param   {Object}   [options]
 * @param   {number}   [options.maxAge] Duration the cache should survive,
 * in microseconds. Default is 0 (infinite)
 * @param   {Object}   [options.context]
 *
 * @returns {any|Promise<any>}
 * @category Functional
 */
export default function memoize (fn, { maxAge, context } = {}) {
  const cache = new MultiMap();

  const wrapper = function (...args) {
    const now = Date.now();
    var leaf = cache.getLeaf(args);
    if (leaf && leaf.expires && leaf.expires < now) leaf = null;
    if (leaf) {
      return leaf.get();
    }

    const res = fn.apply(typeof context !== 'undefined' ? context : this, args);
    if (isPromise(res)) {
      res.then(null, () => cache.delete(args));
    }
    if (leaf) {
      leaf.set(res);
    } else {
      leaf = cache.setLeaf(args, res);
    }
    if (maxAge) leaf.expires = now + maxAge;

    return res;
  };

  wrapper.purge = (...args) => cache.delete(args);
  wrapper.purgeAll = () => cache.clear();
  wrapper.prune = () => {
    const now = Date.now();
    const leaves = Array.from(cache.leaves());
    for (const leaf of leaves) {
      if (leaf.expires && leaf.expires < now) leaf.pluck();
    }
  };
  wrapper._cache = cache;

  return wrapper;
}
