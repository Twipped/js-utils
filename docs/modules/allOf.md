# Module: allOf

## Table of contents

### Functional Functions

- [default](allOf.md#default)

## Functional Functions

### default

▸ **default**(`...criteria`): `predicateOf`

Produces a predicate function that confirms the value to the predicate matches
all of the criteria given to allOf. Criteria may be a string or number to match directly,
a boolean returning function, an iteratee object, or an array of the above.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...criteria` | `any`[] |

#### Returns

`predicateOf`

#### Defined in

[src/allOf.js:16](https://github.com/Twipped/js-utils/blob/f2eceb5/src/allOf.js#L16)
