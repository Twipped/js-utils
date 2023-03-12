# Module: pDefer

## Table of contents

### Promises Functions

- [default](pDefer.md#default)

## Promises Functions

### default

▸ **default**(`options?`): `Promise`<`any`\>

Generates a promise which resolves on the next animation frame.

**`Function`**

pDefer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Options |
| `options.signal` | `AbortSignal` | Signal from an AbortController |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/pDefer.js:14](https://github.com/Twipped/js-utils/blob/f2eceb5/src/pDefer.js#L14)
