# Module: collect

## Table of contents

### Collections Functions

- [default](collect.md#default)

## Collections Functions

### default

▸ **default**(`target`, `path`): `any`[]

Deeply extracts multiple values from a nested object structure.
Functions identical to `get`, except where `get` stops with the first
matching path, this function will keep finding all items that match.
Supports using wildcards in paths to iterate over all keys of an
object or array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | Structure to get a value from. |
| `path` | `string` \| (`string` \| `number`)[] | Property Key, dot-notation path, or array of key names which describes the target value. |

#### Returns

`any`[]

#### Defined in

[src/collect.js:28](https://github.com/Twipped/js-utils/blob/f2eceb5/src/collect.js#L28)
