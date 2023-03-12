# Module: clamp

## Table of contents

### Math Functions

- [default](clamp.md#default)

## Math Functions

### default

▸ **default**(`value`, `minv?`, `maxv?`, `nearest?`): `number` \| `Date`

Restricts a given value to the given minimum and maximum constraints

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` \| `Date` | `undefined` | Value to be constrained |
| `minv?` | `number` \| `Date` | `-Infinity` | Minimum |
| `maxv?` | `number` \| `Date` | `Infinity` | Maximum |
| `nearest?` | `number` | `undefined` | If provided, the value will rounded to the nearest step value. |

#### Returns

`number` \| `Date`

#### Defined in

[src/clamp.js:15](https://github.com/Twipped/js-utils/blob/f2eceb5/src/clamp.js#L15)
