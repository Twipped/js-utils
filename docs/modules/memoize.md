# Module: memoize

## Table of contents

### Functional Functions

- [default](memoize.md#default)

## Functional Functions

### default

▸ **default**(`fn`, `options?`): `any`

Produces a memoized version of the given function which will cache
the values the function produces. This is a promise aware function,
and will self-invalidate if a promise rejects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` |  |
| `options?` | `Object` |  |
| `options.context` | `any` |  |
| `options.maxAge` | `number` | Duration the cache should survive, in microseconds. Default is 0 (infinite) |

#### Returns

`any`

#### Defined in

[src/memoize.js:21](https://github.com/Twipped/js-utils/blob/f2eceb5/src/memoize.js#L21)
