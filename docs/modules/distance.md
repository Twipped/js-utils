# Module: distance

## Table of contents

### Namespaces

- [lookup](distance.lookup.md)

### Functions

- [default](distance.md#default)
- [lookup](distance.md#lookup)

## Functions

### default

▸ **default**(`value`, `from`, `to`): `number`

Convert a value from one unit of distance to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` |  |
| `from` | `string` | Source unit name |
| `to` | `string` | Target unit name |

#### Returns

`number`

#### Defined in

[src/distance.js:389](https://github.com/Twipped/js-utils/blob/f2eceb5/src/distance.js#L389)

___

### lookup

▸ `Private` **lookup**(`name`): `Unit`

Given a unit name, it searches for the correct unit.

**`Function`**

lookupDistanceConverter

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Unit`

#### Defined in

[src/distance.js:374](https://github.com/Twipped/js-utils/blob/f2eceb5/src/distance.js#L374)
