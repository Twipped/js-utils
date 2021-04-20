
import tap from 'tap';
import { intersect, difference, uniq, first, map } from '../src/index.js';

tap.test('uniq array', async (t) => {

  const input = [ 1, 2, 1, 4, 1, 3 ];
  const output = [ 1, 2, 4, 3 ];

  t.same(uniq(input), output);
});

tap.test('intersect', async (t) => {

  const input = [ [ 1, 2, 3 ], [ 101, 2, 1, 10 ], [ 2, 1 ] ];
  const output = [ 1, 2 ];

  t.same(intersect(...input), output);
});

tap.test('intersect 2', async (t) => {

  const input = [ [ 1, 2, 1, 1, 3 ], [ 1 ] ];
  const output = [ 1 ];

  t.same(intersect(...input), output);
});

tap.test('intersect 3', async (t) => {

  const input = [ [ 1, 2, 1, 1, 3 ], null, 1 ];
  const output = [];

  t.same(intersect(...input), output);
});

tap.test('difference', async (t) => {

  const input = [ [ 1, 2, 3, 4, 5 ], [ 5, 2, 10 ] ];
  const output = [ 1, 3, 4 ];

  t.same(difference(...input), output);
});

tap.test('first', async (t) => {

  const inputs = [
    [ 1, 2, 3, 4 ],
    new Set([ 1, 2, 3, 4 ]),
    new Map([
      [ 9, 1 ],
      [ 8, 2 ],
      [ 7, 3 ],
      [ 6, 4 ],
      [ 5, 5 ],
    ]),
    {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    },
  ];
  const outputs = [
    1,
    1,
    1,
    1,
  ];
  const outputs2 = [
    [ 1, 2 ],
    [ 1, 2 ],
    [ 1, 2 ],
    [ 1, 2 ],
  ];

  t.same(inputs.map((i) => first(i)), outputs);
  t.same(inputs.map((i) => first(i, 2)), outputs2);
});


tap.test('map object', async (t) => {
  const targets = {
    '1': 1,
    '2': '2',
    '3': [ 3 ],
    '4': { four: 4 },
  };

  let counter = 0;

  map(targets, (v, k, i) => {
    t.same(v, targets[counter + 1], 'value matches expected');
    t.same(k, String(counter + 1), 'key matches expected');
    t.same(i, counter++, 'index matches expected');
  });
});

tap.test('map map', async (t) => {
  const targets = [
    [ '1',  1 ],
    [ '2',  '2' ],
    [ '3',  [ 3 ] ],
    [ '4',  { four: 4 } ],
  ];

  const m = new Map(targets);
  let counter = 0;

  map(m, (v, k, i) => {
    t.same(v, targets[counter][1], 'value matches expected');
    t.same(k, targets[counter][0], 'key matches expected');
    t.same(i, counter++, 'index matches expected');
  });
});

tap.test('map set', async (t) => {
  const targets = [
    1,
    '2',
    [ 3 ],
    { four: 4 },
  ];

  const set = new Set(targets);
  let counter = 0;

  map(set, (v, k, i) => {
    t.same(v, targets[counter], 'value matches expected');
    t.same(k, counter, 'key matches expected');
    t.same(i, counter++, 'index matches expected');
  });
});

tap.test('map array', async (t) => {
  const targets = [
    1,
    '2',
    [ 3 ],
    { four: 4 },
  ];

  let counter = 0;

  map(targets, (v, k, i) => {
    t.same(v, targets[counter], 'value matches expected');
    t.same(k, counter, 'key matches expected');
    t.same(i, counter++, 'index matches expected');
  });
});
