# Module: hash

## Table of contents

### Data Functions

- [default](hash.md#default)

## Data Functions

### default

▸ **default**(`input`): `number`

Generates a 32bit hash representation of the value passed, similar to md5.
This code is browser safe and works on all runtimes, as opposed to the
WebCrypto.subtle api, which only works on greenfield browsers in HTTPS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to be hashed |

#### Returns

`number`

#### Defined in

[src/hash.js:18](https://github.com/Twipped/js-utils/blob/f2eceb5/src/hash.js#L18)
