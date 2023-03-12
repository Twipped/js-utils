
import tap from 'tap';
import { equal } from '../src/index.js';

tap.test('object integers', async (t) => {

  const v1 = { value: 1 };
  const v2 = { value: 2 };

  t.same(equal(v1, v2, 1), false);
});
