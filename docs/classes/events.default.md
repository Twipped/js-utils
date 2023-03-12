# Class: default

[events](../modules/events.md).default

Browser safe version of the node.js EventEmitter

## Table of contents

### Constructors

- [constructor](events.default.md#constructor)

### Properties

- [\_\_ee\_\_](events.default.md#__ee__)

### Methods

- [emit](events.default.md#emit)
- [off](events.default.md#off)
- [on](events.default.md#on)
- [once](events.default.md#once)

## Constructors

### constructor

• **new default**()

#### Defined in

[src/events.js:6](https://github.com/Twipped/js-utils/blob/f2eceb5/src/events.js#L6)

## Properties

### \_\_ee\_\_

• **\_\_ee\_\_**: `Map`<`any`, `any`\>

#### Defined in

[src/events.js:7](https://github.com/Twipped/js-utils/blob/f2eceb5/src/events.js#L7)

[src/events.js:37](https://github.com/Twipped/js-utils/blob/f2eceb5/src/events.js#L37)

## Methods

### emit

▸ **emit**(`type`, `...args`): [`default`](events.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `...args` | `any`[] |

#### Returns

[`default`](events.default.md)

#### Defined in

[src/events.js:53](https://github.com/Twipped/js-utils/blob/f2eceb5/src/events.js#L53)

___

### off

▸ **off**(`type`, `listener`, `...args`): [`default`](events.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `listener` | `any` |
| `...args` | `any`[] |

#### Returns

[`default`](events.default.md)

#### Defined in

[src/events.js:34](https://github.com/Twipped/js-utils/blob/f2eceb5/src/events.js#L34)

___

### on

▸ **on**(`type`, `listener`): [`default`](events.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `listener` | `any` |

#### Returns

[`default`](events.default.md)

#### Defined in

[src/events.js:10](https://github.com/Twipped/js-utils/blob/f2eceb5/src/events.js#L10)

___

### once

▸ **once**(`type`, `listener`): [`default`](events.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `any` |
| `listener` | `any` |

#### Returns

[`default`](events.default.md)

#### Defined in

[src/events.js:19](https://github.com/Twipped/js-utils/blob/f2eceb5/src/events.js#L19)
