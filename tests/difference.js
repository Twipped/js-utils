
import tap from 'tap';
import { difference } from '../src/index.js';

tap.test('difference', async (t) => {

  const input = [ [ 1, 2, 3, 4, 5 ], [ 5, 2, 10 ] ];
  const output = [ 1, 3, 4 ];

  t.same(difference(...input), output);
});
