# Module: is

## Table of contents

### Functional Functions

- [is](is.md#is)
- [isAll](is.md#isall)
- [isa](is.md#isa)
- [re](is.md#re)

## Functional Functions

### is

▸ **is**(`...conditions`): `Function`

Produces a function that evaluates the first argument it receives against all conditions
given and returns true if any of them return truthy. Can be passed type constructors
to confirm if the passed value is of that type. Non-function values will be compared
with shallow equality.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...conditions` | `any`[] |

#### Returns

`Function`

#### Defined in

[src/is.js:55](https://github.com/Twipped/js-utils/blob/f2eceb5/src/is.js#L55)

___

### isAll

▸ **isAll**(`...conditions`): `Function`

Produces a function that evaluates the first argument it receives against all conditions
given and returns true if *all* of them return truthy. Can be passed type constructors
to confirm if the passed value is of that type. Non-function values will be compared
with shallow equality.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...conditions` | `any`[] |

#### Returns

`Function`

#### Defined in

[src/is.js:84](https://github.com/Twipped/js-utils/blob/f2eceb5/src/is.js#L84)

___

### isa

▸ **isa**(`constructor`): `Function`

Produces a curried function that tests if the first argument
is an instance of the curried constructor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `any` |

#### Returns

`Function`

#### Defined in

[src/is.js:27](https://github.com/Twipped/js-utils/blob/f2eceb5/src/is.js#L27)

___

### re

▸ **re**(`pattern`): `Function`

Produces a function which tests if its first argument matches the given Regular Expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `RegExp` |

#### Returns

`Function`

#### Defined in

[src/is.js:110](https://github.com/Twipped/js-utils/blob/f2eceb5/src/is.js#L110)
