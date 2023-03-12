
import tap from 'tap';
import { pDelay, pRace } from '../src/index.js';

tap.test('promise race', async (t) => {

  const result = await pRace(
    pDelay(100)(100),
    pDelay(110)(110),
    pDelay(70)(70),
    pDelay(10)(10),
    pDelay(11)(11)
  );

  t.equal(result, 10, 'The fastest promise resolved');
});
