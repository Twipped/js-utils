# Module: pCoalesce

## Table of contents

### Promises Functions

- [default](pCoalesce.md#default)

## Promises Functions

### default

▸ **default**(`...promises`): `Promise`<`any`\>

Given a set of promises, resolves with the first truthy result, or the last result to resolve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...promises` | `Promise`<`any`\>[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/pCoalesce.js:11](https://github.com/Twipped/js-utils/blob/f2eceb5/src/pCoalesce.js#L11)
