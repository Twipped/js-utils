# Module: convert

## Table of contents

### Interfaces

- [Unit](../interfaces/convert.Unit.md)

### Type Aliases

- [UnitMap](convert.md#unitmap)

### Functions

- [default](convert.md#default)

## Type Aliases

### UnitMap

Ƭ **UnitMap**<\>: `Object`<[`Unit`](../interfaces/convert.Unit.md)\>

#### Defined in

[src/convert.js:11](https://github.com/Twipped/js-utils/blob/f2eceb5/src/convert.js#L11)

## Functions

### default

▸ `Private` **default**(`unitSet`, `value`, `from_`, `to_?`): `number`

Convert a value from one unit to another

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `unitSet` | `any` | `undefined` | Units set to work with |
| `value` | `string` \| `number` | `undefined` |  |
| `from_` | `string` | `undefined` | Source unit name |
| `to_` | `string` | `'meters'` | Target unit name |

#### Returns

`number`

#### Defined in

[src/convert.js:25](https://github.com/Twipped/js-utils/blob/f2eceb5/src/convert.js#L25)
