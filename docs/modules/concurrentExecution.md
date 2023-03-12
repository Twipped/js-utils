# Module: concurrentExecution

## Table of contents

### Promises Functions

- [default](concurrentExecution.md#default)

## Promises Functions

### default

▸ `Private` **default**(`concurrency`, `iterator`, `predicate`): `Promise`<`any`\>

Executes the given predicate against the given iterator asynchronously, gating so that
only `concurrency` number predicates are running at once, resolving with an array
of all values produced, in order of the iterator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `concurrency` | `number` |
| `iterator` | `Iterator`<`any`, `any`, `undefined`\> |
| `predicate` | `Predicate` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/concurrentExecution.js:17](https://github.com/Twipped/js-utils/blob/f2eceb5/src/concurrentExecution.js#L17)
