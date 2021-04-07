
import tap from 'tap';
import { pmap, pdelay, prace, preduce } from '../dist/utils.cjs.js';

const array = [ 100, 110, 70, 10, 11, 150, 220, 250 ];

tap.test('promise delay', async (t) => {
  const now = Date.now();
  await pdelay(500)();
  t.ok(Date.now() - now > 500, 'It took more than half a second to resolve');
});

tap.test('promise race', async (t) => {

  const result = await prace(
    pdelay(100)(100),
    pdelay(110)(110),
    pdelay(70)(70),
    pdelay(10)(10),
    pdelay(11)(11),
  );

  t.equal(result, 10, 'The fastest promise resolved');
});


tap.test('promise map no concurrency', async (t) => {

  const result = await pmap(array, (v) => pdelay(v)(v));

  t.same(result, array, 'Non concurrent results.');
});

tap.test('promise map with concurrency', async (t) => {

  const result = await pmap(array, (v) => pdelay(v)(v), { concurrency: 3 });

  t.same(result, array, 'Concurrent results.');
});

tap.test('promise reduce', async (t) => {

  const result = await preduce(array, (prev, v) => pdelay(v)(prev + v), 0);

  t.same(result, 921, 'Reduced result.');
});
