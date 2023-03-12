# Module: get

## Table of contents

### Functions

- [default](get.md#default)

## Functions

### default

▸ **default**(`target`, `path`, `defaultValue?`): `any`

Deeply extracts a value from a nested object structure.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | Structure to get a value from. |
| `path` | `string` \| (`string` \| `number`)[] | Property Key, dot-notation path, or array of key names which describes the target value. |
| `defaultValue?` | `any` | The value to return if the path cannot be reached. Defaults to undefined. |

#### Returns

`any`

#### Defined in

[src/get.js:24](https://github.com/Twipped/js-utils/blob/f2eceb5/src/get.js#L24)
