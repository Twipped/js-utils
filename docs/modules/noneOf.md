# Module: noneOf

## Table of contents

### Functional Functions

- [default](noneOf.md#default)

## Functional Functions

### default

▸ **default**(`...criteria`): `predicateOf`

Produces a predicate function that confirms the value to the predicate matches
none of the criteria given to noneOf. Criteria may be a string or number to match directly,
a boolean returning function, an iteratee object, or an array of the above.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...criteria` | `any`[] |

#### Returns

`predicateOf`

#### Defined in

[src/noneOf.js:15](https://github.com/Twipped/js-utils/blob/f2eceb5/src/noneOf.js#L15)
