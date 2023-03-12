# Module: pDebounce

## Table of contents

### Functions

- [default](pDebounce.md#default)

## Functions

### default

▸ **default**(`func`, `wait?`, `options?`): `Function`

Produces a promise aware debounced function that delays invoking `func` until
after `wait` milliseconds have elapsed since the last time the debounced
function was invoked.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | `Function` | `undefined` |
| `wait` | `number` | `0` |
| `options` | `Object` | `{}` |
| `options.context` | `any` | `undefined` |
| `options.leading` | `boolean` | `undefined` |
| `options.maxWait` | `number` | `undefined` |

#### Returns

`Function`

#### Defined in

[src/pDebounce.js:17](https://github.com/Twipped/js-utils/blob/f2eceb5/src/pDebounce.js#L17)
