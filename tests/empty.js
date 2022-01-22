
import tap from 'tap';
import { empty } from '../index.js';

tap.test('empty()', async (t) => {

  const tests = [
    [ true, undefined ],
    [ true, null, false ],
    [ false, null, true ],
    [ true, 'a' / 1 ],
    [ true,  '' ],
    [ false, '0' ],
    [ false, '1' ],
    [ false, 'a' ],
    [ false, false, false ], // boolean false strict
    [ true,  false, true ],  // boolean false loose
    [ false, true,  false ], // boolean true strict
    [ false, true,  true ],  // boolean true loose
    [ false, 0 ],
    [ true,  0, true ],
    [ false, 1 ],
    [ false, 1, true ],
    [ false, new Date ],
    [ false, new Date, true ],
    [ false, new Date('invalid') ],
    [ true,  new Date('invalid'), true ],
    [ true, [] ],
    [ true, [], true ],
    [ false, [ 0 ] ],
    [ false, [ 0 ], true ],
    [ false, [ null ] ],
    [ false, [ null ], true ],
    [ false, [ 'a' ] ],
    [ false, [ 'a' ], true ],
    [ true, {} ],
    [ true, {}, true ],
    [ false, { a: undefined } ],
    [ true,  { a: undefined }, true ],
    [ false, Object.create({ a: undefined }) ],
    [ true,  Object.create({ a: undefined }), true ],
    [ false, Object.create({ a: true }), true ],
    [ false, Object.assign(Object.create({ a: undefined }), { b: undefined }) ],
    [ true,  Object.assign(Object.create({ a: undefined }), { b: undefined }), true ],
    [ false, Object.assign(Object.create({ a: undefined }), { b: true }), true ],
    [ true, new Map() ],
    [ false, new Map([ [ 'a', undefined ] ]), false ],
    [ true,  new Map([ [ 'a', undefined ] ]), true ],
    [ false, new Map([ [ 'a', 'a' ] ]) ],
    [ false, new Map([ [ 'a', '' ] ]) ],
    [ true, new Set() ],
    [ false, new Set([ undefined ]), false ],
    [ true,  new Set([ undefined ]), true ],
    [ false, new Set([ 'a' ]) ],
    [ false, new Set([ 0 ]) ],
    [ false, new Set([ [ ] ]) ],
  ];

  for (const [ result, ...args ] of tests) {
    t.equal(empty(...args), result, `${args[0]}${args[1] ? ' Loose' : ''}`);
  }
});
