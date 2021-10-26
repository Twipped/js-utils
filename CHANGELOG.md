
4.2.0 / 2021-10-25
==================

- Fix: `prace` now handles arrays of promises
- New: `pcoalesce` will resolve first promise that resolves a truthy value, ignoring rejections
- Fix: `uniq` now actually works right on objects
- New: `quicksort` is now exposed for usage
- New: `sorter` now supports deep property paths
- Fix: `isNumeric` now detects floats
- New: `hash` is a very rudimentary function for generating a hash integer from a string
- New: `mapper` is a utility for converting objects between schema
- Fix: `ucsentence`, `ucwords`, `camelToHyphen`, `camelToSnake` and `camelToUpperSnake` now coerce their inputs to strings.
- New: `similarity` performs a comparison between two strings and returns a value between 0 and 1 indicating how close they are.


4.1.0 / 2021-08-12
==================

- Fixed a huge bug where `equal` would incorrectly report two objects as the same.
- `warn` and `warning` no longer default to console.trace and instead always use console.error.
- `mapValues` can now accept the same kinds of predicates as all other collection functions.
- `filter` now supports objects and maps, returning the same type that was provided.

- New Features
 - `EventEmitter` is now available as a base class. This is a barebones implementation of the NodeJS EventEmitter class.
 - `threepiece` iterates over a collection with a predicate function, providing both the previous and next values along with the iterated item.

4.0.0 / 2021-07-02
==================

- Now works directly from source in Node 14.
- Fixed bug with `entries` starting at index 1 when iterating Sets
- `entries`, `values` and `keys` now always return iterators. Object iteration is faster and smarter.
- Fixed crash in `catcher`
- `distance` is now case insensitive. Added the `sf` unit to feet.
- `mapMode` now supports strings, and the `MAPMODE_STRING` constant has been added.
- `range` now supports an optional third argument for defining a step size
- Fixed `equal`, `shallowEqual` and `deepEqual` treating non-numeric strings as identical when they aren't.
- `sorter` and `sort` now support functions in arrays, and deep targeting keys as predicate options.

- Breaking Changes
  - `hasOwn` is now part of the `isType` module.
  - `clone`, `merge`, `collect`, `get`, `set` and `has` now live in a new `objects` module.

- New Features
  - `join` concatenates arrays using a delimiter
  - `iterateObject` produces entries, keys or values one property at a time (instead of producing an array first)
  - `empty` quickly determines if a collection (including objects) is empty. Supports a truthy second argument to ignore undefined values.
  - `floor` and `ceil`, which support a step value to round to (eg, floor to nearest 50)
  - `isBetween` and `isNotBetween` for comparing numeric values.
  - `warn` to send errors to console in non-production environments.
  - `DEFAULT` has been added as a generic use Symbol
  - `MultiMap` is a hashmap class which supports using arrays of values for deep key assignment.
  - `memoize` is a promise-aware function memoization utility.


3.0.0 / 2021-04-19
==================

- Breaking Changes
  - isArrayOfArrays is now correctly capitalized
  - `assert.fail` is now `fail`
  - `assert.isArray` is now `assertIsArray`
  - `assert.isObject` is now `assertIsObject`
  - `assert.isPlainObject` is now `assertIsPlainObject`
  - `assert.isString` is now `assertIsString`
  - `assert.isNumber` is now `assertIsNumber`

- isArrayOf functions should now be tree shaken properly.

- New Functions
  - `chunkIterable` Takes an iterable and clusters its output into arrays of a provided length. Defaults to pairs
  - `median` Provides the median average of a list of values.

2.1.0 / 2021-04-07
==================

- Fixes:
  - `entries` now provides an iterator for objects instead of an array
  - Added optimization to `uniq` when doing a simple array reduction
  - `marshall` was really messing up with unmapped keys. Now puts them into a catchall bucket defined by third argument.
  - rewrote `first` to lean on `entries` for faster speed
  - Fixed issues with `intersect` and `difference`
  - `gt` and `lt` now coerce undefined and null to 0 and attempt to coerce objects

- New Functions:
  - `camelToHyphen`
  - `camelToSnake`
  - `camelToUpperSnake`
  - qsa
  - hasClassName
  - addClassName
  - removeClassName
  - distance
  - includes
  - chain
  - series

2.0.0 / 2021-02-28
==================

- **Breaking Changes**:
  - Internal structure has been separated into multiple modules.
  - Now requires node 12 for commonjs build
  - `sorter` and `sort` now attempt to coerce objects to sortable values via `.valueOf` or `.toString`

- New Functions:
  - `noop`
  - `clRemap`
  - `clamp`
  - `defer`
  - `timeout`
  - `equal`
  - `clone`
  - `stripIndent`
  - `isIterable`
  - `isIterator`
  - `isPromise`
  - `mapTable`
  - `entries`
  - `nullIterator`
  - `assert`
  - `warning`
  - `prace`
  - `pdelay`
  - `pdefer`
  - `ptry`
  - `pall`
  - `pmap`
  - `preduce`
  - `catcher`
  - `r`

- Fixes:
  - Numerous functions are now date aware.
  - shallowEqual and deepEqual both now derive from the `equal` function.
  - `toPairs` can now take any collection.
  - `fromPairs` now accepts an optional second argument to define the output type.
  - `isArrayOf` no longer returns true for non-arrays.
  - `marshal` now supports a marshalling object map as the second argument.



1.0.0 / 2020-12-29
==================

  * Initial Release
