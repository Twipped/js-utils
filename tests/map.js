
import tap from 'tap';
import { map } from '../index.js';

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
