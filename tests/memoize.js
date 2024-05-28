
import tap from 'tap';
import { memoize } from '../src/index.js';

var value = 0;

function resolves () {
  value++;
  return Promise.resolve(value);
}

function rejects () {
  value++;
  return Promise.reject(value);
}

tap.test('caches resolved promises', async (t) => {
  t.plan(3);
  value = 0;
  var fn = memoize(resolves);

  t.equal(await fn(), 1, 'first call incremented');
  t.equal(await fn(), 1, 'second call not incremented');
  fn.purge();
  t.equal(await fn(), 2, 'third call incremented');
});

tap.test('does not cache rejections', async (t) => {
  t.plan(5);
  value = 0;
  var fn = memoize(() => (value ? resolves(value) : rejects()));

  await fn().then(
    () => t.fail('First call should have rejected'),
    () => {
      t.pass('First call rejected');
      t.equal(value, 1, 'First call incremented');
    }
  );

  t.equal(await fn(), 2, 'second call incremented again');
  t.equal(await fn(), 2, 'third call did not increment');
  fn.purge();
  t.equal(await fn(), 3, 'fourth call did increment');
});

tap.test('relays arguments correctly', async (t) => {
  t.plan(7);
  value = 0;
  var fn = memoize(async (arg1) => arg1 + (++value));

  t.equal(await fn('A'), 'A1', 'First call w/A incremented');
  t.equal(await fn('B'), 'B2', 'Second call w/B incremented');
  t.equal(await fn('B'), 'B2', 'Second call w/B did not increment');
  t.equal(await fn('A'), 'A1', 'Third call w/A did not increment');
  t.equal(await fn('B'), 'B2', 'Fourth call w/B did not increment');
  fn.purge('A');
  t.equal(await fn('A'), 'A3', 'Fifth call w/A after purging A did increment');
  t.equal(await fn('B'), 'B2', 'Sixth call w/B remains unpurged');
});

tap.test('prunes stale values', async (t) => {
  value = 0;
  var fn = memoize((arg1) => arg1 + (++value), { maxAge: -1 });

  t.equal(fn._cache.size, 0, 'Cache is empty');

  t.equal(fn('A'), 'A1', 'First Call');
  t.equal(fn('A'), 'A2', 'Second Call');

  t.equal(fn._cache.size, 1, 'Cache contains one item');

  fn.prune();

  t.equal(fn._cache.size, 0, 'Cache is empty');

});

tap.test('resolves an undefined return', async (t) => {
  value = 0;
  var fn = memoize(async () => {
    if (value++) return value;
  });

  var result = fn();

  t.not(typeof result, 'undefined', 'Did not get back an undefined value');
  t.equal(typeof result.then, 'function', 'Did get back a promise');
  t.equal(typeof (await result), 'undefined', 'Promise resolved with undefined');
  t.equal(typeof (await fn()), 'undefined', 'Second invocation also resolves with undefined');
});

tap.test('catches a thrown exception', async (t) => {
  t.plan(1);
  value = 0;
  var fn = memoize(async () => {
    throw new Error('BAH!');
  });

  await fn().then(
    () => t.fail(),
    (e) => {
      t.equal(e.message, 'BAH!');
    }
  );
});

tap.test('multiple arguments', async (t) => {
  t.plan(8);
  value = 0;
  var fn = memoize(() => ++value);

  const arr1 = [];
  const arr2 = [];
  const obj = {};

  t.equal(fn('A', arr1, 1), 1, 'First call invokes');
  t.equal(fn('A', arr1, 1), 1, 'Second call skips');
  t.equal(fn('A', arr2, 1), 2, 'Third call invokes');
  t.equal(fn('B', arr2, 1), 3, 'Fourth call invokes');
  t.equal(fn('A', arr1, 1), 1, 'Fifth call w/original arguments returns original');
  t.equal(fn('B', arr2, 2), 4, 'Sixth call invokes');
  t.equal(fn('A', obj, 1), 5, 'Seventh call invokes');

  fn.purge('B', arr2, 1);
  t.equal(fn('B', arr2, 1), 6, 'Purged arguments re-invoke');
});
