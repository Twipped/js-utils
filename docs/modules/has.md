# Module: has

## Table of contents

### Data Functions

- [default](has.md#default)

## Data Functions

### default

▸ **default**(`target`, `path`): `any`

Deeply searches for a value in a nested object structure and returns true
if a value is found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | Structure to get a value from. |
| `path` | `string` \| (`string` \| `number`)[] | Property Key, dot-notation path, or array of key names which describes the target value. |

#### Returns

`any`

#### Defined in

[src/has.js:22](https://github.com/Twipped/js-utils/blob/f2eceb5/src/has.js#L22)
