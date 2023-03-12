# Module: pMap

## Table of contents

### Promises Functions

- [default](pMap.md#default)

## Promises Functions

### default

▸ **default**(`collection`, `predicate`, `options?`): `Promise`<`any`\>

Map over the given collection asynchronously, gating so that
only `concurrency` number predicates are running at once. Resolves with
an array containing the results in order of the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Collection` |
| `predicate` | `Predicate` |
| `options?` | `Object` |
| `options.concurrency` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/pMap.js:21](https://github.com/Twipped/js-utils/blob/f2eceb5/src/pMap.js#L21)
