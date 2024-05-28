
import tap from 'tap';
import { first } from '../src/index.js';


tap.test('first', async (t) => {

  const inputs = [
    [ 1, 2, 3, 4 ],
    new Set([ 1, 2, 3, 4 ]),
    new Map([
      [ 9, 1 ],
      [ 8, 2 ],
      [ 7, 3 ],
      [ 6, 4 ],
      [ 5, 5 ],
    ]),
    {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    },
  ];

  for (const input of inputs) {
    t.same(first(input ), 1, `single value${input}`);
    t.same(first(input, 2), [ 1, 2 ], `multiple values${input}`);
  }
});

