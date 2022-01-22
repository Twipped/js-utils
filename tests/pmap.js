
import tap from 'tap';
import { pMap, pDelay } from '../index.js';

const array = [ 100, 110, 70, 10, 11, 150, 220, 250 ];

tap.test('promise map no concurrency', async (t) => {

  const result = await pMap(array, (v) => pDelay(v)(v));

  t.same(result, array, 'Non concurrent results.');
});

tap.test('promise map with concurrency', async (t) => {

  const result = await pMap(array, (v) => pDelay(v)(v), { concurrency: 3 });

  t.same(result, array, 'Concurrent results.');
});
