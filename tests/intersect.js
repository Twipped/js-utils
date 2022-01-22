
import tap from 'tap';
import { intersect } from '../index.js';

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

