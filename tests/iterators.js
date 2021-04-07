
import tap from 'tap';
import { mapMode, isIterator, isIterable, isGenerator, ensureIterable, MAPMODE, map } from '../dist/utils.cjs.js';

const array = [ 1, 2, 3 ];
const object = { a: 1, b: 2, c: 3 };
const generator = function* () {
  let i = 3;
  while (i) yield i--;
};

const emptyIterator = { next: () => ({ done: true }) };
const emptyIterable = { [Symbol.iterator]: () => emptyIterator };

tap.equal(mapMode(array), MAPMODE.ARRAY);
tap.equal(mapMode(generator), false);
tap.equal(mapMode(generator()), MAPMODE.ITERATOR);
tap.equal(mapMode(emptyIterator), MAPMODE.ITERATOR);
tap.equal(mapMode(emptyIterable), MAPMODE.ITERABLE);
tap.equal(mapMode(object), MAPMODE.OBJECT);

tap.equal(isIterator(emptyIterable), false);
tap.equal(isIterator(emptyIterator), true);
tap.equal(isIterator(array), false);
tap.equal(isIterator(generator), false);
tap.equal(isIterator(generator()), true);
tap.equal(isIterator(object), false);

tap.equal(isIterable(emptyIterable), true);
tap.equal(isIterable(emptyIterator), false);
tap.equal(isIterable(array), true);
tap.equal(isIterable(generator), false);
tap.equal(isIterable(generator()), true);
tap.equal(isIterable(object), false);

tap.equal(isGenerator(emptyIterable), false);
tap.equal(isGenerator(emptyIterator), false);
tap.equal(isGenerator(array), false);
tap.equal(isGenerator(generator), true);
tap.equal(isGenerator(generator()), false);
tap.equal(isGenerator(object), false);

tap.ok(isIterable(ensureIterable(emptyIterator)));
tap.ok(isIterable(ensureIterable(emptyIterable)));
tap.ok(isIterator(ensureIterable(emptyIterator)));
tap.notOk(isIterator(ensureIterable(emptyIterable)));
tap.notOk(isGenerator(ensureIterable(emptyIterator)));

const mappedGenerator = map(generator());
tap.type(mappedGenerator, Array);
tap.same(mappedGenerator, [ 3, 2, 1 ]);

