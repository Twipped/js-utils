# Module: anyOf

## Table of contents

### Functional Functions

- [default](anyOf.md#default)

## Functional Functions

### default

▸ **default**(`...criteria`): `predicateOf`

Produces a predicate function that confirms the value to the predicate matches
any of the criteria given to anyOf. Criteria may be a string or number to match directly,
a boolean returning function, an iteratee object, or an array of the above.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...criteria` | `any`[] |

#### Returns

`predicateOf`

#### Defined in

[src/anyOf.js:16](https://github.com/Twipped/js-utils/blob/f2eceb5/src/anyOf.js#L16)
