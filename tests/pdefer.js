
import tap from 'tap';
import { pDefer } from '../index.js';

tap.test('pDefer()', async (s) => {
  s.test('works', async (t) => {
    const res = await pDefer();
    t.same(res, undefined, 'no value passed through');
  });

  s.test('works with passthru', async (t) => {
    const res = await pDefer()('foo');
    t.same(res, 'foo', 'value passed through correctly');
  });
});
