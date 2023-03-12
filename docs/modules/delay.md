# Module: delay

## Table of contents

### Timers Functions

- [default](delay.md#default)

## Timers Functions

### default

▸ **default**(`fn`, `time`): `Function`

Executes the given function after `time` milliseconds.

**`Alias`**

timeout

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` | Function to invoke |
| `time` | `number` | Duration in milliseconds |

#### Returns

`Function`

Returns a disposer for the timer.

#### Defined in

[src/delay.js:11](https://github.com/Twipped/js-utils/blob/f2eceb5/src/delay.js#L11)
