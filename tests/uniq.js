
import tap from 'tap';
import { uniq } from '../src/index.js';

tap.test('uniq array', async (t) => {

  const input = [ 1, 2, 1, 4, 1, 3 ];
  const output = [ 1, 2, 4, 3 ];

  t.same(uniq(input), output);
});
