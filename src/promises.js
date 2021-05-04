
import { assert, warning } from './assert.js';
import {
  mapMode,
  fromPairs,
} from './collections.js';
import { entries } from './iterators.js';
import { noop, iteratee } from './functions.js';
import { defer, timeout } from './timers.js';

export function pdelay (delay) {
  const fn = (passthru) => new Promise((resolve) => timeout(() => resolve(passthru), delay));
  fn.then = (...args) => fn().then(args);
  return fn;
}

export function pdefer () {
  const fn = (passthru) => new Promise((resolve) => defer(() => resolve(passthru)));
  fn.then = (...args) => fn().then(args);
  return fn;
}

export function pall (...promises) {
  return Promise.all(promises.flat(1));
}

export function ptry (fn, ...args) {
  try {
    return Promise.resolve(fn(...args));
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function concurrentExecution (concurrency, iterator, predicate) {
  assert(concurrency > 0, 'Concurrency must be a number larger than 0.');
  const processing = new Map();
  const results = [];
  let index = 0;
  let value, done;

  function fill () {
    while (!done && processing.size < concurrency) {
      ({ value, done } = iterator.next(index));
      if (done) return;
      processing.set(index, ptry(predicate, value, index));
      index++;
    }
  }

  function race () {
    return new Promise((resolve, reject) => {
      for (const [ idx, promise ] of processing.entries()) {
        promise.then(() => resolve(idx), reject);
      }
    });
  }

  do {
    fill();
    if (done) break;

    const completedIndex = await race();
    results[completedIndex] = await processing.get(completedIndex);
    processing.delete(completedIndex);

  } while (true);

  await Promise.all(processing.values());
  for (const [ idx, promise ] of processing.entries()) {
    results[idx] = await promise;
  }

  return Array.from(results);
}

export async function pmap (collection, predicate, { concurrency = Infinity } = {}) {
  collection = await collection;
  predicate = iteratee(predicate);
  const mode = mapMode(collection);
  const it = entries(collection);

  const subpredicate = async ([ k, v ], i) => [ k, await predicate(v, k, i) ];
  if (concurrency && concurrency !== Infinity) {
    collection = await concurrentExecution(concurrency, it, subpredicate);
  } else {
    collection = await Promise.all(Array.from(it, subpredicate));
  }

  return fromPairs(collection, mode);
}

export async function prace (...promises) {
  promises = Array.isArray(promises[0]) ? promises.flat(1) : promises;
  if (Promise.race) return Promise.race(promises);
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      p.then(resolve, reject);
    }
  });
}

export async function preduce (collection, predicate, initial = null) {
  collection = await collection;
  predicate = iteratee(predicate);
  const it = entries(collection);
  const subpredicate = async (p, [ k, v ], i) => predicate(p, v, k, i);

  let result = await initial;
  let index = 0;
  for (const entry of it) {
    result = await subpredicate(result, entry, index++);
  }

  return result;
}

export function catcher (fn) {
  try {
    const res = fn();
    if (res && typeof res.then === 'function') {
      return res.then(noop, (e) => warning(false, e));
    }
    return res;
  } catch (e) {
    warning(false, e);
  }
}
