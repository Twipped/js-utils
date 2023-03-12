import tap from 'tap';
import { format as pretty } from 'pretty-format';
import { get } from '../src/index.js';

tap.test('get()', async (s) => {
  s.test('should get string keyed property values', async (t) => {
    const object = { a: 1 };

    t.equal(get(object, 'a'), 1);
    t.equal(get(object, [ 'a' ]), 1);
  });

  // TODO: This is currently failing
  s.skip('should preserve the sign of `0`', async (t) => {
    const object = { '-0': 'a', 0: 'b' };
    const props = [ -0, Object(-0), 0, Object(0) ];

    t.same(
      props.map((key) => get(object, key)),
      [ 'a', 'a', 'b', 'b' ]
    );
  });

  s.test('should get symbol keyed property values', async (t) => {
    const symbol = Symbol('foo');
    const object = { [symbol]: 1 };

    t.equal(get(object, symbol), 1);
  });

  s.test('should get deep property values', async (t) => {
    const object = { a: { b: 2 } };

    t.equal(get(object, 'a.b'), 2);
    t.equal(get(object, [ 'a', 'b' ]), 2);
  });

  s.test('should get a key over a path', async (t) => {
    const object = { 'a.b': 1, a: { b: 2 } };

    t.equal(get(object, 'a.b'), 1);
    t.equal(get(object, [ 'a', 'b' ]), 2);
  });

  s.test('should not coerce array paths to strings', async (t) => {
    const object = { 'a,b,c': 3, a: { b: { c: 4 } } };

    t.equal(get(object, [ 'a', 'b', 'c' ]), 4);
  });

  s.test('should not ignore empty brackets', async (t) => {
    const object = { a: { '': 1 } };

    t.equal(get(object, 'a[]'), 1);
  });

  s.test('should handle empty paths', async (t) => {
    t.equal(get({}, ''), undefined);
    t.equal(get({}, []), undefined);
    t.equal(get({ '': 3 }, ''), 3);
    t.equal(get({ '': 3 }, [ '' ]), 3);
  });

  s.test('should handle complex paths', async (t) => {
    const object = { a: { '-1.23': { '["b"]': { c: { "['d']": { '\ne\n': { f: { g: 8 } } } } } } } };

    t.equal(get(object, 'a[-1.23]["[\\"b\\"]"].c[\'[\\\'d\\\']\'][\ne\n][f].g'), 8);
    t.equal(get(object, [ 'a', '-1.23', '["b"]', 'c', "['d']", '\ne\n', 'f', 'g' ]), 8);
  });

  s.test('should return `undefined` when `object` is nullish', async (t) => {
    t.equal(get(null, 'constructor'), undefined);
    t.equal(get(null, [ 'constructor' ]), undefined);
    t.equal(get(undefined, 'constructor'), undefined);
    t.equal(get(undefined, [ 'constructor' ]), undefined);
  });

  s.test('should return `undefined` for deep paths when `object` is nullish', async (t) => {
    t.equal(get(null, 'constructor.prototype.valueOf'), undefined);
    t.equal(get(undefined, 'constructor.prototype.valueOf'), undefined);
    t.equal(get(null, [ 'constructor', 'prototype', 'valueOf' ]), undefined);
    t.equal(get(undefined, [ 'constructor', 'prototype', 'valueOf' ]), undefined);
  });

  s.test('should return `undefined` if parts of `path` are missing', async (t) => {
    const object = { a: [ , null ] }; // eslint-disable-line no-sparse-arrays

    t.same(get(object, 'a[1].b.c'), undefined);
    t.same(get(object, [ 'a', '1', 'b', 'c' ]), undefined);
  });

  s.test('should be able to return `null` values', async (t) => {
    const object = { a: { b: null } };

    t.same(get(object, 'a.b'), null);
    t.same(get(object, [ 'a', 'b' ]), null);
  });

  s.test('should return the default value for `undefined` values', async (t) => {
    const object = { a: {} };
    const empties = [ , null, undefined, false, 0, NaN, '', [], {}, true, new Date(), 1, /x/, 'a' ]; // eslint-disable-line no-sparse-arrays

    empties.forEach((value) => {
      t.test(pretty(value), (tt) => {
        tt.same(get(object, 'a.b', value), value);
        tt.same(get(object, [ 'a', 'b' ], value), value);
        tt.end();
      });
    });
  });

  s.test('should return the default value when `path` is empty', async (t) => {
    t.equal(get({}, [], 'a'), 'a');
  });
});
