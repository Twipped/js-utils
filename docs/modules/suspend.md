# Module: suspend

## Table of contents

### Namespaces

- [default](suspend.default.md)

### Type Aliases

- [TaskCallback](suspend.md#taskcallback)

### Functions

- [default](suspend.md#default)
- [resetSuspension](suspend.md#resetsuspension)

## Type Aliases

### TaskCallback

Ƭ **TaskCallback**<\>: <\>(`key`: `string`) => `Promise`<`any`\>

#### Type declaration

▸ <\>(`key`): `Promise`<`any`\>

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The operation name. |

##### Returns

`Promise`<`any`\>

#### Defined in

[src/suspend.js:23](https://github.com/Twipped/js-utils/blob/f2eceb5/src/suspend.js#L23)

## Functions

### default

▸ **default**(`key`, `fn`): `any`

Performs an asyncronous task in a manner compatible with
the React Suspension API.

Note, if you don't know how Suspension works, you probably
shouldn't use this function.

This will execute the given function and throw the promise it
produces so that React.Suspense can await its completion, dismounting
your component while it completes. When the promise finishes,
React.Suspense will remount your component, invoking this function again.
At that point, this function returns the resolved value for the rest of
the life of the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | A name for this operation that is unique across your entire application (including multiple instances of your component). |
| `fn` | [`TaskCallback`](suspend.md#taskcallback) | The async task to perform. |

#### Returns

`any`

#### Defined in

[src/suspend.js:47](https://github.com/Twipped/js-utils/blob/f2eceb5/src/suspend.js#L47)

___

### resetSuspension

▸ **resetSuspension**(`key`): `void`

Removes a stored async result from the suspense cache, allowing
it to be invoked again on next render.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The operation name to remove. |

#### Returns

`void`

#### Defined in

[src/suspend.js:83](https://github.com/Twipped/js-utils/blob/f2eceb5/src/suspend.js#L83)
