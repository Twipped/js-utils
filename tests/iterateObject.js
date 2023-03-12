
import tap from 'tap';
import { iterateObject } from '../src/index.js';

tap.test('iterateObject', async (t) => {

  const input = {
    a: 1,
    b: 2,
  };

  const itr = iterateObject(input);
  var res = itr.next();
  t.equal(res.done, false);
  t.same(res.value, [ 'a', 1 ]);
  res = itr.next();
  t.equal(res.done, false);
  t.same(res.value, [ 'b', 2 ]);
  res = itr.next();
  t.equal(res.done, true);
  t.equal(res.value, undefined);
});
