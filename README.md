@twipped/utils
===

A collection of basic utility functions that I use in many of my rollup/react projects instead of lodash. No, it's not documented.

Why write my own utility library? Have you seen lodash lately? I wanted something smaller that could be tree-shook.

### Usage

```
npm install @twipped/utils
```

### Usage

In CommonJS:

```js
const u = require('@twipped/utils');
```

In ES6:

```js
import * as u from '@twipped/utils';
```

# API Reference

### [isArrayOfArrays](#isArrayOfArrays) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are arrays.


### [isArrayOfStrings](#isArrayOfStrings) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are strings.


### [isArrayOfNumbers](#isArrayOfNumbers) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are numbers.


### [isArrayOfBooleans](#isArrayOfBooleans) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are booleans.


### [isArrayOfObjects](#isArrayOfObjects) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are objects.


### [isArrayOfMappables](#isArrayOfMappables) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are mappable items.


### [isArrayOfPrimatives](#isArrayOfPrimatives) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are strings, numbers or booleans.


### [isArrayOfFunctions](#isArrayOfFunctions) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are functions.


### [isArrayOfRegEx](#isArrayOfRegEx) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are Regular Expressions.


### [isArrayOfTruthy](#isArrayOfTruthy) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are truthy.


### [isArrayOfFalsey](#isArrayOfFalsey) 
**Returns**: <code>boolean</code> - Returns true if all items in the array are falsey.


### [containsArrays](#containsArrays) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are arrays.


### [containsStrings](#containsStrings) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are strings.


### [containsNumbers](#containsNumbers) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are numbers.


### [containsBooleans](#containsBooleans) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are booleans.


### [containsObjects](#containsObjects) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are object like.


### [containsMappables](#containsMappables) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are mappable collections.


### [containsPrimatives](#containsPrimatives) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are strings, numbers or booleans.


### [containsFunctions](#containsFunctions) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are functions.


### [containsRegEx](#containsRegEx) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are Regular Expressions.


### [containsTruthy](#containsTruthy) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are truthy.


### [containsFalsey](#containsFalsey) 
**Category**: Collections  
**Returns**: <code>boolean</code> - Returns true if any items in the array are falsey.


### [qsa](#qsa) 
Queries the document/element for any elements matching the given selector, and returns an array.

**Category**: DOM  

| Param | Type | Description |
| --- | --- | --- |
| [el] | <code>Element</code> | Restrict the search to the contents of the given DOMElement |
| selector | <code>string</code> |  |
| [predicate] | [<code>Predicate</code>](#Predicate) | Optional predicate function to transform the found elements. |

**Returns**: <code>Array</code>


### [hasClassName](#hasClassName) 
Returns true of the provided DOMElement has the given classname

**Category**: DOM  

| Param | Type |
| --- | --- |
| el | <code>Element</code> | 
| className | <code>string</code> | 

**Returns**: <code>boolean</code>


### [addClassName](#addClassName) 
Adds the given classname to the provided DOMElement

**Category**: DOM  

| Param | Type |
| --- | --- |
| el | <code>Element</code> | 
| className | <code>string</code> | 




### [removeClassName](#removeClassName) 
Removes the given classname to the provided DOMElement, if it exists

**Category**: DOM  

| Param | Type |
| --- | --- |
| el | <code>Element</code> | 
| className | <code>string</code> | 




### [warn](#warn) 
Sends an error message to the console, unless NODE_ENV is "production"

**Category**: Errors  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | Values to log |




### [warning](#warning) 
Identical to `assert`, except it sends to console rather than throwing.
If process.env.NODE_ENV is "production", nothing happens.

**Category**: Errors  

| Param | Type | Description |
| --- | --- | --- |
| ok | <code>any</code> | Value to test |
| ...args | <code>any</code> | Values to log |

**Returns**: <code>void</code>


### [isWritable](#isWritable) 
Confirms if a given path is writable.

**Category**: File System  

| Param | Type |
| --- | --- |
| file | <code>string</code> | 

**Returns**: <code>Promise.&lt;boolean&gt;</code>


### [touch](#touch) 
Attempts to create a file at the given path, creating any missing folders along the way.
If the file already exists, its modification time will be updated.

**Category**: File System  

| Param | Type |
| --- | --- |
| file | <code>string</code> | 




### [remove](#remove) 
Deletes the file at the given path, if it exists.

**Category**: File System  

| Param | Type |
| --- | --- |
| file | <code>string</code> | 




### [writeJSON](#writeJSON) 
Write the passed data structure to a file as JSON.

**Category**: File System  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> |  |
| object | <code>Object</code> \| <code>Array</code> |  |
| [options] | <code>Object</code> | Options for fs.writeFile |
| [options.encoding] | <code>string</code> | File encoding for the data, defaults to utf8 |




### [readJSON](#readJSON) 
Reads a JSON file from disk and parses its contents.

**Category**: File System  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> |  |
| [options] | <code>Object</code> | Options for fs.readFile |
| [options.reviver] | <code>function</code> |  |
| [options.quiet] | <code>boolean</code> |  |
| [options.encoding] | <code>string</code> | File encoding for the data, defaults to utf8 |

**Returns**: <code>Object</code> \| <code>Array</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code>


### [stripBom](#stripBom) 
Removes the Byte Order Mark from a string

**Category**: File System  

| Param | Type |
| --- | --- |
| content | <code>string</code> \| <code>Buffer</code> | 

**Returns**: <code>string</code>


### [is](#is) 
Produces a function that evaluates the first argument it receives against all conditions
given and returns true if any of them return truthy. Can be passed type constructors
to confirm if the passed value is of that type. Non-function values will be compared
with shallow equality.

**Category**: Functional  

| Param | Type |
| --- | --- |
| conditions | <code>function</code> \| <code>any</code> | 

**Returns**: <code>function</code>


### [isAll](#isAll) 
Produces a function that evaluates the first argument it receives against all conditions
given and returns true if *all* of them return truthy. Can be passed type constructors
to confirm if the passed value is of that type. Non-function values will be compared
with shallow equality.

**Category**: Functional  

| Param | Type |
| --- | --- |
| conditions | <code>function</code> \| <code>any</code> | 

**Returns**: <code>function</code>


### [re](#re) 
Produces a function which tests if its first argument matches the given Regular Expression

**Category**: Functional  

| Param | Type |
| --- | --- |
| pattern | <code>RegExp</code> | 

**Returns**: <code>function</code>


### [isArrayOf](#isArrayOf) 
Produces a function which evaluates a set of functions against
all items in an array and returns true if all of the function evaluate truthy.

**Category**: Functional  

| Param | Type |
| --- | --- |
| ...args | <code>function</code> | 

**Returns**: <code>function</code>


### [contains](#contains) 
Produces a function which evaluates a set of functions against
all items in an array and returns true if any of the function evaluate truthy.

**Category**: Functional  

| Param | Type |
| --- | --- |
| ...args | <code>function</code> | 

**Returns**: <code>function</code>


### [noop](#noop) 
This function does nothing and returns nothing.

**Category**: Functional  



### [pDefer](#pDefer) 
Generates a promise which resolves on the next animation frame.

**Category**: Promises  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options |
| [options.signal] | <code>AbortSignal</code> | Signal from an AbortController |

**Returns**: <code>Promise</code>


### [pDelay](#pDelay) 
Generates a promise which resolves after a given duration.

**Category**: Promises  

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | Delay duration in milliseconds |
| [options] | <code>Object</code> | Options |
| [options.signal] | <code>AbortSignal</code> | Signal from an AbortController |

**Returns**: <code>Promise</code>


### [camelToHyphen](#camelToHyphen) 
Converts camelCast to hyphen-case

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [camelToSnake](#camelToSnake) 
Converts camelCast to snake_case

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [camelToUpperSnake](#camelToUpperSnake) 
Converts camelCast to UPPER_SNAKE_CASE

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [clr](#clr) 
Generates a css className string given an array of classNames, substituting
classes using the given map object

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> \| <code>Array.&lt;string&gt;</code> | 
| classMap | <code>Object</code> | 

**Returns**: <code>string</code>


### [htmlEscape](#htmlEscape) 
Very dirty function to make a string HTML safe.
Copied from Sindre Sorhus' escape-goat

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [timeout](#timeout) 
Executes the given function after `time` milliseconds.

**Category**: Timers  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to invoke |
| time | <code>number</code> | Duration in milliseconds |

**Returns**: <code>function</code> - Returns a disposer for the timer.


### [isArray](#isArray) 
Tests if a given value is an Array

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isNumber](#isNumber) 
Tests if a given value is a Number

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isBoolean](#isBoolean) 
Tests if a given value is a Boolean

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isString](#isString) 
Tests if a given value is a String

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isFunction](#isFunction) 
Tests if a given value is a Function

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isNull](#isNull) 
Tests if a given value is Null

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isUndefined](#isUndefined) 
Tests if a given value is Undefined

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isUndefinedOrNull](#isUndefinedOrNull) 
Tests if a given value is Undefined or Null

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isNotUndefinedOrNull](#isNotUndefinedOrNull) 
Tests if a given value is NOT Undefined or Null

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isMap](#isMap) 
Tests if a given value is an ECMA Map

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isSet](#isSet) 
Tests if a given value is an ECMA Set

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isDate](#isDate) 
Tests if a given value is an ECMA Date object

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isRegExp](#isRegExp) 
Tests if a given value is a Regular Expression object

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isTrue](#isTrue) 
Tests if a given value is strictly true

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isFalse](#isFalse) 
Tests if a given value is strictly false

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isList](#isList) 
Tests if a given value is an Array or Set

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isDict](#isDict) 
Tests if a given value is an Object or Map

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isIterator](#isIterator) 
Tests if a given value meets the Iterator interface

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isNumber](#isNumber) 
Tests if a given value meets the Promise interface

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isNumber](#isNumber) 
Tests if a given value is a Generator function

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isIterable](#isIterable) 
Tests if a given value is iterable using for..of or Array.from()

**Category**: Types  

| Param | Type |
| --- | --- |
| input | <code>any</code> | 
| strict | <code>boolean</code> | 

**Returns**: <code>boolean</code>


### [isNumeric](#isNumeric) 
Tests if a given value is a number or is safely coerced to a number.

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isPrimitive](#isPrimitive) 
Tests if a given value is a JavaScript primitive (strings, numbers, booleans)

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |

**Returns**: <code>boolean</code>


### [isObject](#isObject) 
Tests if a given value is an object, strictly or loosely

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to test |
| [strict] | <code>boolean</code> | If true, will only return true for plain objects with no prototypes. This will exclude Functions and any result of Object.create(). |

**Returns**: <code>boolean</code>


### [isMappable](#isMappable) 
Tests if a given value is a collection that can be mapped by our utilities

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>any</code> | Value to be tested |
| listsOK | <code>boolean</code> | Pass false to exclude Arrays and Sets as valid. |

**Returns**: <code>boolean</code>


### [sizeOf](#sizeOf) 
Returns the total values within a given collection, regardless of collection type.

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| collection | [<code>Collection</code>](#Collection) | Collection to be measured |

**Returns**: <code>number</code>


### [isTruthy](#isTruthy) 
Tests if a given value is truthy, with extra logic to validate dates.

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | Value to be tested |
| [deep] | <code>boolean</code> | If true, the function will return false for empty collections. |

**Returns**: <code>boolean</code>


### [isFalsey](#isFalsey) 
Tests if a given value is falsey, with extra logic to validate dates.

**Category**: Types  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | Value to be tested |
| [deep] | <code>boolean</code> | If true, the function will return false for empty collections. |

**Returns**: <code>boolean</code>


### [gt](#gt) 
Tests if the first value is greater than the second value, accepting any type

**Category**: Types  

| Param | Type |
| --- | --- |
| a | <code>any</code> | 
| b | <code>any</code> | 

**Returns**: <code>boolean</code>


### [lt](#lt) 
Tests if the first value is less than the second value, accepting any type

**Category**: Types  

| Param | Type |
| --- | --- |
| a | <code>any</code> | 
| b | <code>any</code> | 

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Tests all passed arguments (or the contents of passed collections) for truthiness.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | [description] |

**Returns**: <code>boolean</code> - Returns true if all provided values are truthy


### [module.exports](#module-exports) 
Tests any passed argument (or the contents of passed arrays) for truthiness.


| Param | Type |
| --- | --- |
| ...args | <code>any</code> | 

**Returns**: <code>boolean</code> - Returns true if any of the values are truthy.


### [module.exports](#module-exports) 
Compares two collections to their maximum depth.


| Param | Type |
| --- | --- |
| a | <code>any</code> | 
| b | <code>any</code> | 

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Produces an array of all values in a given collection, delimited with the provided value.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| delimiter | <code>any</code> | 

**Returns**: <code>Array.&lt;any&gt;</code>


### [module.exports](#module-exports) 
Produces an array of all values which do not exist in all collections passed.


| Param | Type |
| --- | --- |
| ...collections | [<code>Collection</code>](#Collection) | 

**Returns**: <code>Array.&lt;any&gt;</code>


### [module.exports](#module-exports) 
Convert a value from one unit of distance to another.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> |  |
| from | <code>string</code> | Source unit name |
| to | <code>string</code> | Target unit name |

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Iterates over a collection, ignoring the results and returning the original collection.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | <code>function</code> | 

**Returns**: [<code>Collection</code>](#Collection)


### [module.exports](#module-exports) 
Returns true if the passed value is empty, by some measure of its type.
- objects (true if no properties, fuzzy mode true if no non-undefined properties)
- arrays, maps & sets (true if no values, fuzzy mode true if no non-undefined values)
- strings (true if “”)
- numbers (true if NaN, fuzzy mode true if 0)
- booleans (always false, fuzzy mode true if false)
- dates (always false, fuzzy mode true if invalid)
- undefined (always true)
- null (always false in strict mode, always true in fuzzy mode)


| Param | Type | Description |
| --- | --- | --- |
| collection | [<code>Collection</code>](#Collection) | Value to test for emptiness |
| [fuzzy] | <code>boolean</code> | Fuzzy mode |

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Compares two values of any type and returns true if they are the same.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>any</code> |  |  |
| b | <code>any</code> |  |  |
| [depth] | <code>number</code> | <code>1</code> | When provided two collections, this value controls how deeply they should be compared. The default is 1 level deep. |

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Creates a new empty collection of the same type passed.


| Param | Type | Description |
| --- | --- | --- |
| collection | [<code>Collection</code>](#Collection) | [description] |
| [strict] | <code>boolean</code> | If true, iterable and object detection will be strict (see isObject and isIterable) |

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Filter a collection using a predicate


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: [<code>Collection</code>](#Collection)


### [module.exports](#module-exports) 
Find a value in a collection using a predicate.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Find the index/key of a value in a collection using a predicate


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: <code>number</code> \| <code>string</code> \| <code>any</code>


### [module.exports](#module-exports) 
Returns the first iterate value in the collection.


| Param | Type | Description |
| --- | --- | --- |
| collection | [<code>Collection</code>](#Collection) |  |
| [count] | <code>number</code> | Number of values to return. |

**Returns**: <code>any</code> \| <code>Array.&lt;any&gt;</code>


### [module.exports](#module-exports) 
Creates an array with all nested collections concatenated recursively into one layer.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| depth | <code>number</code> | 

**Returns**: <code>Array</code>


### [module.exports](#module-exports) 
Produces a collection from an array of key/value tuples.


| Param | Type | Description |
| --- | --- | --- |
| pairs | <code>Array.&lt;Array.&lt;any, any&gt;&gt;</code> |  |
| options | <code>Object</code> |  |
| [options.mode] | [<code>MAPMODE</code>](#MAPMODE) | Type of collection to produce. Defaults to Object. |

**Returns**: [<code>Collection</code>](#Collection)


### [module.exports](#module-exports) 
Deeply extracts a value from a nested object structure.


| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> \| <code>Array</code> | Structure to get a value from. |
| path | <code>string</code> \| <code>Array.&lt;(string\|number)&gt;</code> | Property Key, dot-notation path, or array of key names which describes the target value. |
| [defaultValue] | <code>any</code> | The value to return if the path cannot be reached. Defaults to undefined. |

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Produce an object of arrays containing the collection's contents, keyed according to the predicate.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: <code>Object.&lt;Array&gt;</code>


### [module.exports](#module-exports) 
Identical to Array.prototype.includes, but works for all Collection types except Iterables.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| value | <code>any</code> | 

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Produces an array of all values which exist in all the collections passed.


| Param | Type |
| --- | --- |
| ...collections | [<code>Collection</code>](#Collection) | 

**Returns**: <code>Array.&lt;any&gt;</code>


### [module.exports](#module-exports) 
Joins all values of a collection into a string


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| delimiter | <code>string</code> \| <code>number</code> | 

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Produce an object keyed according to the predicate.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: <code>Object</code>


### [module.exports](#module-exports) 
Returns the last iterate values in the collection.


| Param | Type | Default |
| --- | --- | --- |
| input | <code>Array</code> \| <code>Set</code> \| <code>Object</code> \| <code>Map</code> \| <code>string</code> |  | 
| [count] | <code>number</code> | <code>1</code> | 

**Returns**: <code>any</code> \| <code>Array.&lt;any&gt;</code>


### [module.exports](#module-exports) 
Iterates over a collection with a predicate and produces an array of generated values.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: <code>Array</code>


### [module.exports](#module-exports) 
Returns the constant identifying the type of the passed collection.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| strict | <code>boolean</code> | 

**Returns**: [<code>MAPMODE</code>](#MAPMODE)


### [module.exports](#module-exports) 
Iterates over a collection and generates an object based on key/value tuples returned from the predicate.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | <code>function</code> | 

**Returns**: <code>Object</code>


### [module.exports](#module-exports) 
Iterates over an object's properties, transforming the values with a predicate


| Param | Type |
| --- | --- |
| collection | <code>Object</code> | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: <code>Object</code>


### [module.exports](#module-exports) 
Tests that none of the passed argument (or the contents of passed arrays) for truthiness.


| Param | Type |
| --- | --- |
| ...args | <code>any</code> | 

**Returns**: <code>boolean</code> - Returns true if all of the passed values are falsey


### [module.exports](#module-exports) 
Produce a collection without certain values


| Param | Type |
| --- | --- |
| collection | <code>Object</code> \| <code>Array</code> | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: [<code>Collection</code>](#Collection)


### [module.exports](#module-exports) 
Produce a collection containing only certain values


| Param | Type |
| --- | --- |
| collection | <code>Object</code> \| <code>Array</code> | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: [<code>Collection</code>](#Collection)


### [module.exports](#module-exports) 
Produces an array of values from the start number to the end number


| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> |  |
| end | <code>number</code> |  |
| [step] | <code>number</code> |  |
| [predicate] | [<code>Predicate</code>](#Predicate) | A function to map against each iterated step, similar to Array.from() |

**Returns**: <code>Array.&lt;(number\|any)&gt;</code>


### [module.exports](#module-exports) 
Reduces a collection to a single value in the usual manner


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | <code>function</code> | 
| initial | <code>any</code> | 

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Attempts to resolve a value from the passed React ref


| Param | Type | Description |
| --- | --- | --- |
| ref | <code>Ref</code> | A React ref object |

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Compares two collections by their first level of properties.


| Param | Type |
| --- | --- |
| a | <code>any</code> | 
| b | <code>any</code> | 

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Extract a subset of iterate items from a collection.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| begin | <code>number</code> | 
| end | <code>number</code> | 

**Returns**: <code>Array</code>


### [module.exports](#module-exports) 
Sort a collection according to a provided predicate.


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: [<code>Collection</code>](#Collection)


### [module.exports](#module-exports) 
Produces a sorting function using predicate logic.


| Param | Type | Description |
| --- | --- | --- |
| match | [<code>Predicate</code>](#Predicate) | Iteratee predicate descriptor |

**Returns**: <code>function</code>


### [module.exports](#module-exports) 
Converts a collection into an array of key/value tuples.


| Param | Type |
| --- | --- |
| input | [<code>Collection</code>](#Collection) | 

**Returns**: <code>Array.&lt;Array.&lt;any, any&gt;&gt;</code>


### [module.exports](#module-exports) 
Remove duplicates from a collection


| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: [<code>Collection</code>](#Collection)


### [module.exports](#module-exports) 
Checks that all values in the collection evaluate truthy against the predicate

**Category**: Collections  

| Param | Type | Description |
| --- | --- | --- |
| collection | [<code>Collection</code>](#Collection) | [description] |
| predicate | [<code>Predicate</code>](#Predicate) | See `iteratee` for usage. |

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Checks that any value in the collection evaluates as truthy against the predicate

**Category**: Collections  

| Param | Type | Description |
| --- | --- | --- |
| collection | [<code>Collection</code>](#Collection) | [description] |
| predicate | [<code>Predicate</code>](#Predicate) | See `iteratee` for usage. |

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Deeply extracts multiple values from a nested object structure.
Functions identical to `get`, except where `get` stops with the first
matching path, this function will keep finding all items that match.
Supports using wildcards in paths to iterate over all keys of an
object or array.

**Category**: Collections  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> \| <code>Array</code> | Structure to get a value from. |
| path | <code>string</code> \| <code>Array.&lt;(string\|number)&gt;</code> | Property Key, dot-notation path, or array of key names which describes the target value. |

**Returns**: <code>Array</code>


### [module.exports](#module-exports) 
Produces a predicate callback function for use with iterative utilities.

**Category**: Collections  

| Param | Type | Description |
| --- | --- | --- |
| match | [<code>Predicate</code>](#Predicate) | Iteratee predicate descriptor |

**Returns**: <code>function</code>


### [module.exports](#module-exports) 
Checks that none of the values in the collection evaluate as truthy against the predicate

**Category**: Collections  

| Param | Type | Description |
| --- | --- | --- |
| collection | [<code>Collection</code>](#Collection) | [description] |
| predicate | [<code>Predicate</code>](#Predicate) | See `iteratee` for usage. |

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Iterates over a collection, providing the previous, current and next items to the predicate function.

**Category**: Collections  

| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 

**Returns**: <code>Array</code>


### [module.exports](#module-exports) 
Deeply searches for a value in a nested object structure and returns true
if a value is found.

**Category**: Data  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> \| <code>Array</code> | Structure to get a value from. |
| path | <code>string</code> \| <code>Array.&lt;(string\|number)&gt;</code> | Property Key, dot-notation path, or array of key names which describes the target value. |

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Shorthand, prototype safe way to test if an object's property is its own

**Category**: Data  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | Object to check |
| key | <code>string</code> | Property key to check |

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Generates a 32bit hash representation of the value passed, similar to md5.
This code is browser safe and works on all runtimes, as opposed to the
WebCrypto.subtle api, which only works on greenfield browsers in HTTPS.

**Category**: Data  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Value to be hashed |

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Attempts to parse a string as JSON and fails silently, providing the fallback if given.

**Category**: Data  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | Text to parse. |
| [fallback] | <code>any</code> | Value to provide if parsing fails. Defaults to undefined. |

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Produces a function to remap an object structure.
TODO: Explain how to use this.

**Category**: Data  

| Param | Type |
| --- | --- |
| map | <code>Array.&lt;Array&gt;</code> | 

**Returns**: <code>function</code>


### [module.exports](#module-exports) 
Organize a collection into value buckets according to a map

**Category**: Data  

| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 
| rest | <code>string</code> | 

**Returns**: <code>Object</code>


### [module.exports](#module-exports) 
Combines multiple objects into one, recursively.

**Category**: Data  

| Param | Type | Description |
| --- | --- | --- |
| ...sources | <code>Object</code> | Objects to copy. |

**Returns**: <code>Object</code>


### [module.exports](#module-exports) 
Compares the left and right value and returns -1, 0, or +1 based on which is larger.

**Category**: Data  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>any</code> | left value |
| b | <code>any</code> | right value |

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Follows the given path through an object structure to set the given value,
creating objects within the structure as needed.

**Category**: Data  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> |  |
| path | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  |
| value | <code>any</code> | Value to set |

**Returns**: <code>Object</code>


### [module.exports](#module-exports) 
Tests if the first argument is truthy, and throws the passed message if it is not.

**Category**: Errors  
**Throws**:

- Error


| Param | Type | Description |
| --- | --- | --- |
| ok | <code>any</code> | Value to test for truthiness |
| message | <code>string</code> | Message to be thrown on failure. `%s` placeholders are replaced in sequence with the arguments provided after the message. |
| ...substitutions | <code>any</code> | Values to inject into the message on failure. |




### [module.exports](#module-exports) 
Produces a predicate function that confirms the value to the predicate matches
all of the criteria given to allOf. Criteria may be a string or number to match directly,
a boolean returning function, an iteratee object, or an array of the above.

**Category**: Functional  

| Param | Type |
| --- | --- |
| criteria | <code>function</code> \| <code>string</code> \| <code>number</code> \| <code>object</code> \| <code>Array.&lt;(function()\|any)&gt;</code> | 

**Returns**: [<code>predicateOf</code>](#predicateOf)


### [module.exports](#module-exports) 
Produces a predicate function that confirms the value to the predicate matches
any of the criteria given to anyOf. Criteria may be a string or number to match directly,
a boolean returning function, an iteratee object, or an array of the above.

**Category**: Functional  

| Param | Type |
| --- | --- |
| criteria | <code>function</code> \| <code>string</code> \| <code>number</code> \| <code>object</code> \| <code>Array.&lt;(function()\|any)&gt;</code> | 

**Returns**: [<code>predicateOf</code>](#predicateOf)


### [module.exports](#module-exports) 
Produces a function that executes a sequence of functions, passing
the result of each into the next function.

**Category**: Functional  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function</code> | Functions to evaluate. |

**Returns**: <code>function</code>


### [module.exports](#module-exports) 
Produces a curried function that evaluates if a passed value equals the curried value.

**Category**: Functional  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Produces a memoized version of the given function which will cache
the values the function produces. This is a promise aware function,
and will self-invalidate if a promise rejects.

**Category**: Functional  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| [options] | <code>Object</code> |  |
| [options.maxAge] | <code>number</code> | Duration the cache should survive, in microseconds. Default is 0 (infinite) |
| [options.context] | <code>Object</code> |  |

**Returns**: <code>any</code> \| <code>Promise.&lt;any&gt;</code>


### [module.exports](#module-exports) 
Produces a predicate function that confirms the value to the predicate matches
none of the criteria given to noneOf. Criteria may be a string or number to match directly,
a boolean returning function, an iteratee object, or an array of the above.

**Category**: Functional  

| Param | Type |
| --- | --- |
| criteria | <code>function</code> \| <code>string</code> \| <code>number</code> \| <code>object</code> \| <code>Array.&lt;(function()\|any)&gt;</code> | 

**Returns**: [<code>predicateOf</code>](#predicateOf)


### [module.exports](#module-exports) 
Produces a function which is the boolean inversion of the given function.

**Category**: Functional  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function |

**Returns**: <code>function</code>


### [module.exports](#module-exports) 
Function which returns what it receives.

**Category**: Functional  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>any</code> | Value given. |

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Resolves the passed value. If the value is a function, then
the function is invoked, passing along any other arguments received.
If the function returns another function, it is resolved recursively.

**Category**: Functional  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> \| <code>function</code> | Value or resolvable function |
| ...args | <code>any</code> | Arguments to pass to functions. |

**Returns**: <code>any</code>


### [module.exports](#module-exports) 
Produces a function that executes a sequence of functions with the
same arguments, ignoring the return results.

**Category**: Functional  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function</code> | Functions to evaluate. |

**Returns**: <code>function</code>


### [module.exports](#module-exports) 
Produces an iterator collates the values from the given collection into chunked arrays

**Category**: Iterables  

| Param | Type | Default |
| --- | --- | --- |
| input | [<code>Collection</code>](#Collection) |  | 
| [size] | <code>number</code> | <code>2</code> | 

**Returns**: <code>Array</code>


### [module.exports](#module-exports) 
Given a potentially iterable value, ensures the result is always an iterator.

**Category**: Iterables  

| Param | Type | Description |
| --- | --- | --- |
| it | <code>Iterable</code> | Iterable value |

**Returns**: <code>Iterator</code>


### [module.exports](#module-exports) 
Produces an iterator that yields a tuple of key/value pairs from the given collection.

**Category**: Iterables  

| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 

**Returns**: <code>Iterator</code>


### [module.exports](#module-exports) 
Iterates over a given object's contents using the mode provided.

**Category**: Iterables  

| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| mode | [<code>ITERATE\_MODE</code>](#ITERATE_MODE) | 




### [module.exports](#module-exports) 
Produces an iterator that yields the keys from the given collection

**Category**: Iterables  

| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 

**Returns**: <code>Iterator</code>


### [module.exports](#module-exports) 
Generator that does nothing

**Category**: Iterables  



### [module.exports](#module-exports) 
Produces an iterator that yields the values from the given collection

**Category**: Iterables  

| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 

**Returns**: <code>Iterator</code>


### [module.exports](#module-exports) 
Returns the average of all values given.

**Category**: Math  

| Param | Type |
| --- | --- |
| ...collection | <code>number</code> | 

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Returns the given value, rounded up to the nearest number provided

**Category**: Math  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| [nearest] | <code>number</code> | Value to round nearest to. Defaults to 1 |

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Restricts a given value to the given minimum and maximum constraints

**Category**: Math  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> \| <code>Date</code> | Value to be constrained |
| [minv] | <code>number</code> \| <code>Date</code> | Minimum |
| [maxv] | <code>number</code> \| <code>Date</code> | Maximum |
| [nearest] | <code>number</code> | If provided, the value will rounded to the nearest step value. |

**Returns**: <code>number</code> \| <code>Date</code>


### [module.exports](#module-exports) 
Returns the given value, rounded down to the nearest number provided

**Category**: Math  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| [nearest] | <code>number</code> | Value to round nearest to. Defaults to 1 |

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Returns true if the given value is within the minimum and maximum values

**Category**: Math  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>Date</code> | 
| vmin | <code>number</code> \| <code>Date</code> | 
| vmax | <code>number</code> \| <code>Date</code> | 

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Returns true if the given value is outside of the minimum and maximum values

**Category**: Math  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>Date</code> | 
| vmin | <code>number</code> \| <code>Date</code> | 
| vmax | <code>number</code> \| <code>Date</code> | 

**Returns**: <code>boolean</code>


### [module.exports](#module-exports) 
Returns the largest of the values given.
If values are dates, returns the most recent.

**Category**: Math  

| Param | Type |
| --- | --- |
| collection | <code>number</code> \| <code>Date</code> | 

**Returns**: <code>number</code> \| <code>Date</code>


### [module.exports](#module-exports) 
Returns the median of all values given.

**Category**: Math  

| Param | Type |
| --- | --- |
| ...collection | <code>number</code> | 

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Returns the smallest of the values given.
If values are dates, returns the oldest.

**Category**: Math  

| Param | Type |
| --- | --- |
| collection | <code>number</code> \| <code>Date</code> | 

**Returns**: <code>number</code> \| <code>Date</code>


### [module.exports](#module-exports) 
Returns the given value, rounded to the nearest number provided

**Category**: Math  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| [nearest] | <code>number</code> | Value to round nearest to. Defaults to 1 |

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Returns the standard deviation of all values given.

**Category**: Math  

| Param | Type |
| --- | --- |
| ...collection | <code>number</code> | 

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Returns the sum of all values given.

**Category**: Math  

| Param | Type |
| --- | --- |
| ...collection | <code>number</code> | 

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Executes the given function immediately. If the function throws or rejects, then
the error is caught and sent to the console.

**Category**: Promises  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Returns**: <code>void</code>


### [module.exports](#module-exports) 
Shortcut for Promise.all which flattens the arguments given.

**Category**: Promises  

| Param | Type |
| --- | --- |
| ...promises | <code>Promise</code> | 

**Returns**: <code>Promise</code>


### [module.exports](#module-exports) 
Given a set of promises, resolves with the first truthy result, or the last result to resolve.

**Category**: Promises  

| Param | Type |
| --- | --- |
| ...promises | <code>Promise</code> | 

**Returns**: <code>Promise</code>


### [module.exports](#module-exports) 
Map over the given collection asynchronously, gating so that
only `concurrency` number predicates are running at once. Resolves with
an array containing the results in order of the collection.

**Category**: Promises  

| Param | Type | Default |
| --- | --- | --- |
| collection | [<code>Collection</code>](#Collection) |  | 
| predicate | [<code>Predicate</code>](#Predicate) |  | 
| [options] | <code>Object</code> |  | 
| [options.concurrency] | <code>number</code> | <code>Infinity</code> | 

**Returns**: <code>Promise</code>


### [module.exports](#module-exports) 
Given a set of promises, resolves with the first value to resolve or reject

**Category**: Promises  

| Param | Type |
| --- | --- |
| ...promises | <code>Promise</code> | 

**Returns**: <code>Promise</code>


### [module.exports](#module-exports) 
It's reduce, but for promises.

**Category**: Promises  

| Param | Type |
| --- | --- |
| collection | [<code>Collection</code>](#Collection) | 
| predicate | [<code>Predicate</code>](#Predicate) | 
| initial | <code>any</code> | 

**Returns**: <code>Promise</code>


### [module.exports](#module-exports) 
Executes the given function and always returns a promise, even if the function is synchronous.

**Category**: Promises  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| ...args | <code>any</code> | Arguments |

**Returns**: <code>Promise</code>


### [module.exports](#module-exports) 
Generates a css className string given an array of classNames

**Category**: Text  

| Param | Type |
| --- | --- |
| classNames | <code>string</code> \| <code>Array.&lt;string&gt;</code> | 

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Converts a string to lower case

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Compares two strings to determine how similar they are.

**Category**: Text  

| Param | Type |
| --- | --- |
| str1 | <code>string</code> | 
| str2 | <code>string</code> | 

**Returns**: <code>number</code>


### [module.exports](#module-exports) 
Generates a url safe string from the given input

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 
| [options] | <code>Object</code> | 
| [options.delimiter] | <code>string</code> | 
| [options.separators] | <code>boolean</code> | 

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Removes excess indentation from multi-line strings. Can also be used as
a tag function.

**Category**: Text  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | Text to extract |

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Converts a string to upper case

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Uppercases the first letter of the given string

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Uppercases the first letter of every sentence in the given string

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Uppercases the first letter of every word in the given string

**Category**: Text  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

**Returns**: <code>string</code>


### [module.exports](#module-exports) 
Executes the given function on next animation frame.

**Category**: Timers  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to invoke |

**Returns**: <code>function</code> - Returns a disposer for the timer.


