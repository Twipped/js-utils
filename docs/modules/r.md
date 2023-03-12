# Module: r

## Table of contents

### Functional Functions

- [default](r.md#default)

## Functional Functions

### default

▸ **default**(`input`, `...args`): `any`

Resolves the passed value. If the value is a function, then
the function is invoked, passing along any other arguments received.
If the function returns another function, it is resolved recursively.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value or resolvable function |
| `...args` | `any`[] | Arguments to pass to functions. |

#### Returns

`any`

#### Defined in

[src/r.js:15](https://github.com/Twipped/js-utils/blob/f2eceb5/src/r.js#L15)
