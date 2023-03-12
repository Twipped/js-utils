# Module: fs

## Table of contents

### Variables

- [pipeline](fs.md#pipeline)

### File System Functions

- [isWritable](fs.md#iswritable)
- [readJSON](fs.md#readjson)
- [readJson](fs.md#readjson-1)
- [remove](fs.md#remove)
- [touch](fs.md#touch)
- [writeJSON](fs.md#writejson)
- [writeJson](fs.md#writejson-1)

### Other Functions

- [exists](fs.md#exists)
- [linkStat](fs.md#linkstat)
- [mkdir](fs.md#mkdir)
- [stat](fs.md#stat)

## Variables

### pipeline

• `Const` **pipeline**: `any`

#### Defined in

[src/fs.js:7](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L7)

## File System Functions

### isWritable

▸ **isWritable**(`file`): `Promise`<`boolean`\>

Confirms if a given path is writable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/fs.js:21](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L21)

___

### readJSON

▸ **readJSON**(`file`, `options?`): `any`

Reads a JSON file from disk and parses its contents.

**`Alias`**

readJSON

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` |  |
| `options?` | `Object` | Options for fs.readFile |
| `options.encoding` | `string` | File encoding for the data, defaults to utf8 |
| `options.quiet` | `boolean` |  |
| `options.reviver` | `Function` |  |

#### Returns

`any`

#### Defined in

[src/fs.js:100](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L100)

___

### readJson

▸ **readJson**(`file`, `options?`): `any`

Reads a JSON file from disk and parses its contents.

**`Alias`**

readJSON

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` |  |
| `options?` | `Object` | Options for fs.readFile |
| `options.encoding` | `string` | File encoding for the data, defaults to utf8 |
| `options.quiet` | `boolean` |  |
| `options.reviver` | `Function` |  |

#### Returns

`any`

#### Defined in

[src/fs.js:100](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L100)

___

### remove

▸ **remove**(`file`): `Promise`<`any`\>

Deletes the file at the given path, if it exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/fs.js:60](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L60)

___

### touch

▸ **touch**(`file`): `Promise`<`any`\>

Attempts to create a file at the given path, creating any missing folders along the way.
If the file already exists, its modification time will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/fs.js:41](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L41)

___

### writeJSON

▸ **writeJSON**(`file`, `object`, `options?`): `Promise`<`void`\>

Write the passed data structure to a file as JSON.

**`Alias`**

writeJSON

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` |  |
| `object` | `any` |  |
| `options?` | `Object` | Options for fs.writeFile |
| `options.encoding` | `string` | File encoding for the data, defaults to utf8 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fs.js:78](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L78)

___

### writeJson

▸ **writeJson**(`file`, `object`, `options?`): `Promise`<`void`\>

Write the passed data structure to a file as JSON.

**`Alias`**

writeJSON

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` |  |
| `object` | `any` |  |
| `options?` | `Object` | Options for fs.writeFile |
| `options.encoding` | `string` | File encoding for the data, defaults to utf8 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fs.js:78](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L78)

___

## Other Functions

### exists

▸ **exists**(`f`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

#### Returns

`any`

#### Defined in

[src/fs.js:9](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L9)

___

### linkStat

▸ **linkStat**(`f`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

#### Returns

`any`

#### Defined in

[src/fs.js:11](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L11)

___

### mkdir

▸ **mkdir**(`f`, `recursive?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `f` | `any` | `undefined` |
| `recursive` | `boolean` | `true` |

#### Returns

`any`

#### Defined in

[src/fs.js:8](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L8)

___

### stat

▸ **stat**(`f`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

#### Returns

`any`

#### Defined in

[src/fs.js:10](https://github.com/Twipped/js-utils/blob/f2eceb5/src/fs.js#L10)
