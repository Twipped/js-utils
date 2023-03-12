# Module: mapMode

## Table of contents

### Enumerations

- [MAPMODE](../enums/mapMode.MAPMODE.md)

### Variables

- [MAPMODE\_ARRAY](mapMode.md#mapmode_array)
- [MAPMODE\_ITERABLE](mapMode.md#mapmode_iterable)
- [MAPMODE\_ITERATOR](mapMode.md#mapmode_iterator)
- [MAPMODE\_MAP](mapMode.md#mapmode_map)
- [MAPMODE\_OBJECT](mapMode.md#mapmode_object)
- [MAPMODE\_SET](mapMode.md#mapmode_set)
- [MAPMODE\_STRING](mapMode.md#mapmode_string)

### Functions

- [default](mapMode.md#default)

## Variables

### MAPMODE\_ARRAY

• `Const` **MAPMODE\_ARRAY**: ``"ARRAY"``

**`Constant`**

#### Defined in

[src/mapMode.js:12](https://github.com/Twipped/js-utils/blob/f2eceb5/src/mapMode.js#L12)

___

### MAPMODE\_ITERABLE

• `Const` **MAPMODE\_ITERABLE**: ``"ITERABLE"``

**`Constant`**

#### Defined in

[src/mapMode.js:16](https://github.com/Twipped/js-utils/blob/f2eceb5/src/mapMode.js#L16)

___

### MAPMODE\_ITERATOR

• `Const` **MAPMODE\_ITERATOR**: ``"ITERATOR"``

**`Constant`**

#### Defined in

[src/mapMode.js:17](https://github.com/Twipped/js-utils/blob/f2eceb5/src/mapMode.js#L17)

___

### MAPMODE\_MAP

• `Const` **MAPMODE\_MAP**: ``"MAP"``

**`Constant`**

#### Defined in

[src/mapMode.js:14](https://github.com/Twipped/js-utils/blob/f2eceb5/src/mapMode.js#L14)

___

### MAPMODE\_OBJECT

• `Const` **MAPMODE\_OBJECT**: ``"OBJECT"``

**`Constant`**

#### Defined in

[src/mapMode.js:15](https://github.com/Twipped/js-utils/blob/f2eceb5/src/mapMode.js#L15)

___

### MAPMODE\_SET

• `Const` **MAPMODE\_SET**: ``"SET"``

**`Constant`**

#### Defined in

[src/mapMode.js:13](https://github.com/Twipped/js-utils/blob/f2eceb5/src/mapMode.js#L13)

___

### MAPMODE\_STRING

• `Const` **MAPMODE\_STRING**: ``"STRING"``

**`Constant`**

#### Defined in

[src/mapMode.js:18](https://github.com/Twipped/js-utils/blob/f2eceb5/src/mapMode.js#L18)

## Functions

### default

▸ **default**(`collection`, `strict`): `string`

Returns the constant identifying the type of the passed collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `Collection` |
| `strict` | `boolean` |

#### Returns

`string`

#### Defined in

[src/mapMode.js:36](https://github.com/Twipped/js-utils/blob/f2eceb5/src/mapMode.js#L36)
