# Module: iterateObject

## Table of contents

### Namespaces

- [default](iterateObject.default.md)

### Variables

- [ITERATE\_ENTRIES](iterateObject.md#iterate_entries)
- [ITERATE\_KEYS](iterateObject.md#iterate_keys)
- [ITERATE\_VALUES](iterateObject.md#iterate_values)

### Iterables Functions

- [default](iterateObject.md#default)

## Variables

### ITERATE\_ENTRIES

• `Const` **ITERATE\_ENTRIES**: ``"ENTRIES"``

**`Constant`**

*

#### Defined in

[src/iterateObject.js:5](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iterateObject.js#L5)

___

### ITERATE\_KEYS

• `Const` **ITERATE\_KEYS**: ``"KEYS"``

**`Constant`**

*

#### Defined in

[src/iterateObject.js:7](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iterateObject.js#L7)

___

### ITERATE\_VALUES

• `Const` **ITERATE\_VALUES**: ``"VALUES"``

**`Constant`**

*

#### Defined in

[src/iterateObject.js:6](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iterateObject.js#L6)

## Iterables Functions

### default

▸ **default**(`collection`, `mode?`): `Generator`<`any`, `void`, `unknown`\>

Iterates over a given object's contents using the mode provided.

**`Yields`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `collection` | `Collection` | `undefined` |
| `mode` | `any` | `ITERATE_ENTRIES` |

#### Returns

`Generator`<`any`, `void`, `unknown`\>

#### Defined in

[src/iterateObject.js:23](https://github.com/Twipped/js-utils/blob/f2eceb5/src/iterateObject.js#L23)
