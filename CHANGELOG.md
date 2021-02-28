

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
