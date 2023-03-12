# Module: jsonSoftParse

## Table of contents

### Data Functions

- [default](jsonSoftParse.md#default)

## Data Functions

### default

▸ **default**(`input`, `fallback?`): `any`

Attempts to parse a string as JSON and fails silently, providing the fallback if given.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` | `undefined` | Text to parse. |
| `fallback?` | `any` | `undefined` | Value to provide if parsing fails. Defaults to undefined. |

#### Returns

`any`

#### Defined in

[src/jsonSoftParse.js:10](https://github.com/Twipped/js-utils/blob/f2eceb5/src/jsonSoftParse.js#L10)
