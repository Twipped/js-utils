# Module: types

## Table of contents

### Type Aliases

- [Collection](types.md#collection)

### Types Functions

- [gt](types.md#gt)
- [isArray](types.md#isarray)
- [isBoolean](types.md#isboolean)
- [isDate](types.md#isdate)
- [isDict](types.md#isdict)
- [isFalse](types.md#isfalse)
- [isFalsey](types.md#isfalsey)
- [isFunction](types.md#isfunction)
- [isGenerator](types.md#isgenerator)
- [isIterable](types.md#isiterable)
- [isIterator](types.md#isiterator)
- [isList](types.md#islist)
- [isMap](types.md#ismap)
- [isMappable](types.md#ismappable)
- [isNotUndefinedOrNull](types.md#isnotundefinedornull)
- [isNull](types.md#isnull)
- [isNumber](types.md#isnumber)
- [isNumeric](types.md#isnumeric)
- [isObject](types.md#isobject)
- [isPrimitive](types.md#isprimitive)
- [isPromise](types.md#ispromise)
- [isRegExp](types.md#isregexp)
- [isSet](types.md#isset)
- [isString](types.md#isstring)
- [isTrue](types.md#istrue)
- [isTruthy](types.md#istruthy)
- [isUndefined](types.md#isundefined)
- [isUndefinedOrNull](types.md#isundefinedornull)
- [lt](types.md#lt)
- [sizeOf](types.md#sizeof)

## Type Aliases

### Collection

Ƭ **Collection**<\>: `string` \| `any`[] \| `Map` \| `Set` \| `Iterator` \| `Iterable` \| `object`

#### Defined in

[src/types.js:6](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L6)

## Types Functions

### gt

▸ **gt**(`a`, `b`): `boolean`

Tests if the first value is greater than the second value, accepting any type

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

#### Defined in

[src/types.js:357](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L357)

___

### isArray

▸ **isArray**(`arg`): arg is any[]

Tests if a given value is an Array

**`Function`**

isArray

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1491

___

### isBoolean

▸ **isBoolean**(`input`): `boolean`

Tests if a given value is a Boolean

**`Function`**

isBoolean

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:38](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L38)

___

### isDate

▸ **isDate**(`input`): `boolean`

Tests if a given value is an ECMA Date object

**`Function`**

isDate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:128](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L128)

___

### isDict

▸ **isDict**(`input`): `boolean`

Tests if a given value is an Object or Map

**`Function`**

isDict

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:178](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L178)

___

### isFalse

▸ **isFalse**(`input`): `boolean`

Tests if a given value is strictly false

**`Function`**

isFalse

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:158](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L158)

___

### isFalsey

▸ **isFalsey**(`value`, `deep?`): `boolean`

Tests if a given value is falsey, with extra logic to validate dates.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `any` | `undefined` | Value to be tested |
| `deep?` | `boolean` | `false` | If true, the function will return false for empty collections. |

#### Returns

`boolean`

#### Defined in

[src/types.js:344](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L344)

___

### isFunction

▸ **isFunction**(`input`): `boolean`

Tests if a given value is a Function

**`Function`**

isFunction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:58](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L58)

___

### isGenerator

▸ **isGenerator**(`input`): `boolean`

Tests if a given value is a Generator function

**`Function`**

isNumber

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:210](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L210)

___

### isIterable

▸ **isIterable**(`input`, `strict?`): `boolean`

Tests if a given value is iterable using for..of or Array.from()

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `any` | `undefined` |
| `strict` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/types.js:221](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L221)

___

### isIterator

▸ **isIterator**(`input`): `boolean`

Tests if a given value meets the Iterator interface

**`Function`**

isIterator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:188](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L188)

___

### isList

▸ **isList**(`input`): `boolean`

Tests if a given value is an Array or Set

**`Function`**

isList

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:168](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L168)

___

### isMap

▸ **isMap**(`input`): `boolean`

Tests if a given value is an ECMA Map

**`Function`**

isMap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:108](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L108)

___

### isMappable

▸ **isMappable**(`collection`, `listsOK?`): `boolean`

Tests if a given value is a collection that can be mapped by our utilities

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `collection` | `any` | `undefined` | Value to be tested |
| `listsOK` | `boolean` | `true` | Pass false to exclude Arrays and Sets as valid. |

#### Returns

`boolean`

#### Defined in

[src/types.js:296](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L296)

___

### isNotUndefinedOrNull

▸ **isNotUndefinedOrNull**(`input`): `boolean`

Tests if a given value is NOT Undefined or Null

**`Function`**

isNotUndefinedOrNull

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:98](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L98)

___

### isNull

▸ **isNull**(`input`): `boolean`

Tests if a given value is Null

**`Function`**

isNull

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:68](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L68)

___

### isNumber

▸ **isNumber**(`input`): `boolean`

Tests if a given value is a Number

**`Function`**

isNumber

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:28](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L28)

___

### isNumeric

▸ **isNumeric**(`input`): `boolean`

Tests if a given value is a number or is safely coerced to a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:236](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L236)

___

### isObject

▸ **isObject**(`input`, `strict?`): `boolean`

Tests if a given value is an object, strictly or loosely

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `any` | `undefined` | Value to test |
| `strict?` | `boolean` | `false` | If true, will only return true for plain objects with no prototypes. This will exclude Functions and any result of Object.create(). |

#### Returns

`boolean`

#### Defined in

[src/types.js:277](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L277)

___

### isPrimitive

▸ **isPrimitive**(`input`): `boolean`

Tests if a given value is a JavaScript primitive (strings, numbers, booleans)

**`Function`**

isPrimitive

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:256](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L256)

___

### isPromise

▸ **isPromise**(`input`): `boolean`

Tests if a given value meets the Promise interface

**`Function`**

isNumber

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:198](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L198)

___

### isRegExp

▸ **isRegExp**(`input`): `boolean`

Tests if a given value is a Regular Expression object

**`Function`**

isRegExp

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:138](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L138)

___

### isSet

▸ **isSet**(`input`): `boolean`

Tests if a given value is an ECMA Set

**`Function`**

isSet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:118](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L118)

___

### isString

▸ **isString**(`input`): `boolean`

Tests if a given value is a String

**`Function`**

isString

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:48](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L48)

___

### isTrue

▸ **isTrue**(`input`): `boolean`

Tests if a given value is strictly true

**`Function`**

isTrue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:148](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L148)

___

### isTruthy

▸ **isTruthy**(`value`, `deep?`): `boolean`

Tests if a given value is truthy, with extra logic to validate dates.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `any` | `undefined` | Value to be tested |
| `deep?` | `boolean` | `false` | If true, the function will return false for empty collections. |

#### Returns

`boolean`

#### Defined in

[src/types.js:329](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L329)

___

### isUndefined

▸ **isUndefined**(`input`): `boolean`

Tests if a given value is Undefined

**`Function`**

isUndefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:78](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L78)

___

### isUndefinedOrNull

▸ **isUndefinedOrNull**(`input`): `boolean`

Tests if a given value is Undefined or Null

**`Function`**

isUndefinedOrNull

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `any` | Value to test |

#### Returns

`boolean`

#### Defined in

[src/types.js:88](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L88)

___

### lt

▸ **lt**(`a`, `b`): `boolean`

Tests if the first value is less than the second value, accepting any type

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

#### Defined in

[src/types.js:377](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L377)

___

### sizeOf

▸ **sizeOf**(`collection`): `number`

Returns the total values within a given collection, regardless of collection type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | `any` | Collection to be measured |

#### Returns

`number`

#### Defined in

[src/types.js:313](https://github.com/Twipped/js-utils/blob/f2eceb5/src/types.js#L313)
