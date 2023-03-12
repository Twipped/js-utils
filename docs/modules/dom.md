# Module: dom

## Table of contents

### DOM Functions

- [addClassName](dom.md#addclassname)
- [hasClassName](dom.md#hasclassname)
- [qsa](dom.md#qsa)
- [removeClassName](dom.md#removeclassname)

## DOM Functions

### addClassName

▸ **addClassName**(`el`, `className`): `void`

Adds the given classname to the provided DOMElement

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Element` |
| `className` | `string` |

#### Returns

`void`

#### Defined in

[src/dom.js:46](https://github.com/Twipped/js-utils/blob/f2eceb5/src/dom.js#L46)

___

### hasClassName

▸ **hasClassName**(`el`, `className`): `boolean`

Returns true of the provided DOMElement has the given classname

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Element` |
| `className` | `string` |

#### Returns

`boolean`

#### Defined in

[src/dom.js:34](https://github.com/Twipped/js-utils/blob/f2eceb5/src/dom.js#L34)

___

### qsa

▸ **qsa**(`el?`, `selector`, `predicate?`): `any`[]

Queries the document/element for any elements matching the given selector, and returns an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el?` | `Element` | Restrict the search to the contents of the given DOMElement |
| `selector` | `string` |  |
| `predicate?` | `Predicate` | Optional predicate function to transform the found elements. |

#### Returns

`any`[]

#### Defined in

[src/dom.js:15](https://github.com/Twipped/js-utils/blob/f2eceb5/src/dom.js#L15)

___

### removeClassName

▸ **removeClassName**(`el`, `className`): `void`

Removes the given classname to the provided DOMElement, if it exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Element` |
| `className` | `string` |

#### Returns

`void`

#### Defined in

[src/dom.js:57](https://github.com/Twipped/js-utils/blob/f2eceb5/src/dom.js#L57)
