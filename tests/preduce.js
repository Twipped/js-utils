
import tap from 'tap';
import { pDelay, pReduce } from '../src/index.js';

const array = [ 100, 110, 70, 10, 11, 150, 220, 250 ];

tap.test('pReduce()', async (s) => {
  s.test('with initial value', async (t) => {
    const result = await pReduce(array, (prev, v) => pDelay(v)(prev + v), 0);

    t.same(result, 921, 'Reduced result.');
  });

  s.test('without initial value', async (t) => {
    const result = await pReduce(array, (prev, v) => pDelay(v)(prev + v));

    t.same(result, 921, 'Reduced result.');
  });
});
