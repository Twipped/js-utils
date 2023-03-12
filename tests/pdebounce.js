
import tap from 'tap';
import { pDebounce } from '../src/index.js';

function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

tap.test('pDebounce', async (s) => {
  s.test('returns the result of a single operation ', async (t) => {
    const debounced = pDebounce(async (value) => value, 100);
    const promise = debounced('foo');
    const result = await promise;

    t.equal(result, 'foo');
  });

  s.test('returns the result of the latest operation ', async (t) => {
    const debounced = pDebounce(async (value) => value, 100);
    const promises = [ 'foo', 'bar', 'baz', 'qux' ].map(debounced);
    const results = await Promise.all(promises);

    t.same(results, [ 'qux', 'qux', 'qux', 'qux' ]);
  });

  s.test('if leading=true, the value from the first promise is used', async (t) => {
    const debounced = pDebounce(async (value) => value, 100, { leading: true });
    const promises = [ 'foo', 'bar', 'baz', 'qux' ].map(debounced);
    const results = await Promise.all(promises);

    t.same(results, [ 'foo', 'qux', 'qux', 'qux' ]);
  });

  s.test('do not call the given function repeatedly', async (t) => {
    let callCount = 0;
    const debounced = pDebounce(async () => callCount++, 100);
    await Promise.all([ 1, 2, 3, 4 ].map(debounced));
    t.equal(callCount, 1);
  });

  s.test('does not call the given function again after the timeout when leading=true if executed only once', async (t) => {
    let callCount = 0;
    const debounced = pDebounce(async () => callCount++, 100, { leading: true });
    await debounced();
    await sleep(200);
    t.equal(callCount, 1);
  });

  s.test('calls the given function again after the timeout when leading=true if executed multiple times', async (t) => {
    let callCount = 0;
    const debounced = pDebounce(async () => callCount++, 100, { leading: true });
    await Promise.all([ 1, 2, 3, 4 ].map(debounced));
    await sleep(200);
    t.equal(callCount, 2);
  });

  s.test('waits until the wait time has passed', async (t) => {
    let callCount = 0;
    const debounced = pDebounce(async () => callCount++, 10);
    debounced();
    debounced();
    debounced();
    t.equal(callCount, 0);
    await sleep(20);
    t.equal(callCount, 1);
  });

  s.test('supports passing function as wait parameter', async (t) => {
    let callCount = 0;
    let getWaitCallCount = 0;
    const debounced = pDebounce(async () => callCount++, () => {
      getWaitCallCount++;
      return 100;
    });
    debounced();
    debounced();
    debounced();
    await sleep(90);
    t.equal(callCount, 0);
    await sleep(20);
    t.not(getWaitCallCount, 0);
    t.equal(callCount, 1);
  });

  s.test('calls the given function again if wait time has passed', async (t) => {
    let callCount = 0;
    const debounced = pDebounce(async () => callCount++, 10);
    debounced();

    await sleep(20);
    t.equal(callCount, 1);

    debounced();

    await sleep(20);
    t.equal(callCount, 2);
  });

  s.test('maintains the context of the original function', async (t) => {
    const context = {
      foo: 1,
      debounced: pDebounce(async function () {
        await this.foo++;
      }, 10),
    };

    context.debounced();

    await sleep(20);
    t.equal(context.foo, 2);
  });

  s.test('maintains the context of the original function when leading=true', async (t) => {
    const context = {
      foo: 1,
      debounced: pDebounce(async function () {
        await this.foo++;
      }, 10, { leading: true }),
    };

    await context.debounced();

    t.equal(context.foo, 2);
  });

  s.test('Converts the return value from the producer function to a promise', async (t) => {
    let callCount = 0;
    const debounced = pDebounce(() => ++callCount, 10);

    debounced();
    debounced();
    await debounced();

    t.equal(callCount, 1);
  });


  s.test('forces flush on maxWait', async (t) => {
    let callCount = 0;
    const debounced = pDebounce(async () => callCount++, 10, { maxWait: 20 });
    debounced();
    await sleep(5);
    debounced();
    await sleep(5);
    debounced();
    await sleep(5);
    debounced();
    await sleep(5);
    debounced();
    await sleep(5);
    t.equal(callCount, 1);
    debounced();
    await sleep(25);
    t.equal(callCount, 2);
  });

  s.test('maxWait splits requests into correct chunks', async (t) => {
    let callCount = 0;
    const debounced = pDebounce(async () => { await sleep(50); callCount++; }, 10, { maxWait: 20 });
    debounced();
    await sleep(5);
    debounced();
    await sleep(5);
    debounced();
    await sleep(50);

    debounced();
    await sleep(5);
    debounced();
    await sleep(5);
    debounced();
    await sleep(100);
    t.equal(callCount, 2);
  });
});
