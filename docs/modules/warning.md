# Module: warning

## Table of contents

### Errors Functions

- [default](warning.md#default)

## Errors Functions

### default

▸ **default**(`ok`, `...args`): `void`

Identical to `assert`, except it sends to console rather than throwing.
If process.env.NODE_ENV is "production", nothing happens.

**`Function`**

warning

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `any` | Value to test |
| `...args` | `any`[] | Values to log |

#### Returns

`void`

#### Defined in

[src/warning.js:13](https://github.com/Twipped/js-utils/blob/f2eceb5/src/warning.js#L13)
