# Module: pDelay

## Table of contents

### Promises Functions

- [default](pDelay.md#default)

## Promises Functions

### default

▸ **default**(`duration`, `options?`): `Promise`<`any`\>

Generates a promise which resolves after a given duration.

**`Function`**

pDelay

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Delay duration in milliseconds |
| `options?` | `Object` | Options |
| `options.signal` | `AbortSignal` | Signal from an AbortController |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/pDelay.js:15](https://github.com/Twipped/js-utils/blob/f2eceb5/src/pDelay.js#L15)
