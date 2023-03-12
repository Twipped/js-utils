# Module: empty

## Table of contents

### Functions

- [default](empty.md#default)

## Functions

### default

▸ **default**(`collection`, `fuzzy?`): `boolean`

Returns true if the passed value is empty, by some measure of its type.
- objects (true if no properties, fuzzy mode true if no non-undefined properties)
- arrays, maps & sets (true if no values, fuzzy mode true if no non-undefined values)
- strings (true if “”)
- numbers (true if NaN, fuzzy mode true if 0)
- booleans (always false, fuzzy mode true if false)
- dates (always false, fuzzy mode true if invalid)
- undefined (always true)
- null (always false in strict mode, always true in fuzzy mode)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `Collection` | Value to test for emptiness |
| `fuzzy?` | `boolean` | Fuzzy mode |

#### Returns

`boolean`

#### Defined in

[src/empty.js:30](https://github.com/Twipped/js-utils/blob/f2eceb5/src/empty.js#L30)
