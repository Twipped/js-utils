
import tap from 'tap';
import { distance } from '../index.js';

tap.test('sf to m', async (t) => {

  const input = '2,500';
  const output = 762;

  t.equal(distance(input, 'sf', 'm'), output);
});
