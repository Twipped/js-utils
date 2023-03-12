
import tap from 'tap';
import { pDelay } from '../src/index.js';

tap.test('pDelay()', async (s) => {
  s.test('works', async (t) => {
    const now = Date.now();
    await pDelay(500);
    t.ok(Date.now() - now > 500, 'It took more than half a second to resolve');
  });

  s.test('works with passthru', async (t) => {
    const now = Date.now();
    const res = await pDelay(500)('foo');
    t.same(res, 'foo', 'value passed through correctly');
    t.ok(Date.now() - now > 2, 'It resolved asynchronously');
  });

  if (typeof AbortController !== 'undefined') {
    s.test('is cancelable', async (t) => {
      const controller = new AbortController();
      const now = Date.now();
      const promise = pDelay(1000, { signal: controller.signal });
      controller.abort('FOO');

      await t.rejects(promise, 'FOO');

      t.ok(Date.now() - now < 100, 'The promise rejected long before the delay.');
    });
  } else {
    s.skip('is cancelable');
  }
});
