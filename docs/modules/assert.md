# Module: assert

## Table of contents

### Errors Functions

- [assertIsArray](assert.md#assertisarray)
- [assertIsNumber](assert.md#assertisnumber)
- [assertIsObject](assert.md#assertisobject)
- [assertIsPlainObject](assert.md#assertisplainobject)
- [assertIsString](assert.md#assertisstring)
- [default](assert.md#default)
- [fail](assert.md#fail)

## Errors Functions

### assertIsArray

▸ **assertIsArray**(`ok`, `...args`): `void`

Tests if the first argument is an array, and throws the passed message if it is not.

**`Throws`**

Error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `any` | Value to test for truthiness |
| `...args` | `any`[] | - |

#### Returns

`void`

#### Defined in

[src/assert.js:57](https://github.com/Twipped/js-utils/blob/f2eceb5/src/assert.js#L57)

___

### assertIsNumber

▸ **assertIsNumber**(`ok`, `...args`): `void`

Tests if the first argument is a number, and throws the passed message if it is not.

**`Throws`**

Error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `any` | Value to test for truthiness |
| `...args` | `any`[] | - |

#### Returns

`void`

#### Defined in

[src/assert.js:109](https://github.com/Twipped/js-utils/blob/f2eceb5/src/assert.js#L109)

___

### assertIsObject

▸ **assertIsObject**(`ok`, `...args`): `void`

Tests if the first argument is object like, and throws the passed message if it is not.

**`Throws`**

Error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `any` | Value to test for truthiness |
| `...args` | `any`[] | - |

#### Returns

`void`

#### Defined in

[src/assert.js:70](https://github.com/Twipped/js-utils/blob/f2eceb5/src/assert.js#L70)

___

### assertIsPlainObject

▸ **assertIsPlainObject**(`ok`, `...args`): `void`

Tests if the first argument is a plain object, and throws the passed message if it is not.

**`Throws`**

Error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `any` | Value to test for truthiness |
| `...args` | `any`[] | - |

#### Returns

`void`

#### Defined in

[src/assert.js:83](https://github.com/Twipped/js-utils/blob/f2eceb5/src/assert.js#L83)

___

### assertIsString

▸ **assertIsString**(`ok`, `...args`): `void`

Tests if the first argument is a string, and throws the passed message if it is not.

**`Throws`**

Error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `any` | Value to test for truthiness |
| `...args` | `any`[] | - |

#### Returns

`void`

#### Defined in

[src/assert.js:96](https://github.com/Twipped/js-utils/blob/f2eceb5/src/assert.js#L96)

___

### default

▸ **default**(`ok`, `message`, `...substitutions`): `void`

Tests if the first argument is truthy, and throws the passed message if it is not.

**`Throws`**

Error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ok` | `any` | Value to test for truthiness |
| `message` | `string` | Message to be thrown on failure. `%s` placeholders are replaced in sequence with the arguments provided after the message. |
| `...substitutions` | `any`[] | Values to inject into the message on failure. |

#### Returns

`void`

#### Defined in

[src/assert.js:21](https://github.com/Twipped/js-utils/blob/f2eceb5/src/assert.js#L21)

___

### fail

▸ **fail**(`...args`): `void`

Throws an Error with the given message

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/assert.js:43](https://github.com/Twipped/js-utils/blob/f2eceb5/src/assert.js#L43)
