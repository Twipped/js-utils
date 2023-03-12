# Module: iteratee

## Table of contents

### Type Aliases

- [ArrayPredicate](iteratee.md#arraypredicate)
- [FunctionPredicate](iteratee.md#functionpredicate)
- [NullPredicate](iteratee.md#nullpredicate)
- [NumberPredicate](iteratee.md#numberpredicate)
- [ObjectPredicate](iteratee.md#objectpredicate)
- [Predicate](iteratee.md#predicate)
- [StringPredicate](iteratee.md#stringpredicate)

### Collections Functions

- [default](iteratee.md#default)

## Type Aliases

### ArrayPredicate

Ƭ **ArrayPredicate**<\>: `any`[]

#### Defined in

[src/iteratee.js:78](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iteratee.js#L78)

___

### FunctionPredicate

Ƭ **FunctionPredicate**<\>: <\>(`value`: `any`, `key`: `any`, `index`: `number`) => `any`

#### Type declaration

▸ <\>(`value`, `key`, `index`): `any`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The iterate value |
| `key` | `any` | The key for the iterate value. When iterating Sets, Arrays, Iterables or strings, this will be the same as the index. |
| `index` | `number` | The incrementing index of the iterate value, starting from 0. |

##### Returns

`any`

#### Defined in

[src/iteratee.js:100](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iteratee.js#L100)

___

### NullPredicate

Ƭ **NullPredicate**<\>: ``null`` \| `undefined`

#### Defined in

[src/iteratee.js:18](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iteratee.js#L18)

___

### NumberPredicate

Ƭ **NumberPredicate**<\>: `number`

#### Defined in

[src/iteratee.js:53](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iteratee.js#L53)

___

### ObjectPredicate

Ƭ **ObjectPredicate**<\>: `Object`

#### Defined in

[src/iteratee.js:92](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iteratee.js#L92)

___

### Predicate

Ƭ **Predicate**<\>: [`NullPredicate`](iteratee.md#nullpredicate) \| [`StringPredicate`](iteratee.md#stringpredicate) \| [`NumberPredicate`](iteratee.md#numberpredicate) \| [`ArrayPredicate`](iteratee.md#arraypredicate) \| [`ObjectPredicate`](iteratee.md#objectpredicate) \| [`FunctionPredicate`](iteratee.md#functionpredicate)

#### Defined in

[src/iteratee.js:120](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iteratee.js#L120)

___

### StringPredicate

Ƭ **StringPredicate**<\>: `string`

#### Defined in

[src/iteratee.js:36](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iteratee.js#L36)

## Collections Functions

### default

▸ **default**(`match`): `Function`

Produces a predicate callback function for use with iterative utilities.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `match` | `any` | Iteratee predicate descriptor |

#### Returns

`Function`

#### Defined in

[src/iteratee.js:132](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iteratee.js#L132)
