
import {
  isMap,
  isSet,
  isArray,
  isObject,
  isFunction,
  isUndefined,
  isUndefinedOrNull,
  isNumber,
  isString,
  isPrimitive,
  isIterator,
  isIterable,
  isMappable,
} from './isType.js';
import { isArrayOfStrings } from './isArrayOf.js';
import { assert } from './assert.js';
import { iteratee, sorter, noop } from './functions.js';
import { entries, nullIterator } from './iterators.js';
import { get, set } from './objects.js';

export const MAPMODE_ARRAY  = 'ARRAY';
export const MAPMODE_SET    = 'SET';
export const MAPMODE_MAP    = 'MAP';
export const MAPMODE_OBJECT = 'OBJECT';
export const MAPMODE_ITERABLE = 'ITERABLE';
export const MAPMODE_ITERATOR = 'ITERATOR';
export const MAPMODE_STRING = 'STRING';
export const MAPMODE = {
  [MAPMODE_ARRAY]: MAPMODE_ARRAY,
  [MAPMODE_SET]: MAPMODE_SET,
  [MAPMODE_MAP]: MAPMODE_MAP,
  [MAPMODE_OBJECT]: MAPMODE_OBJECT,
  [MAPMODE_ITERATOR]: MAPMODE_ITERATOR,
  [MAPMODE_ITERABLE]: MAPMODE_ITERABLE,
};

export function mapMode (collection, strict) {
  if (isString(collection)) return MAPMODE_STRING;
  if (isArray(collection)) return MAPMODE_ARRAY;
  if (isSet(collection)) return MAPMODE_SET;
  if (isMap(collection)) return MAPMODE_MAP;
  if (isIterator(collection)) return MAPMODE_ITERATOR;
  if (isIterable(collection, strict)) return MAPMODE_ITERABLE;
  if (isObject(collection, strict)) return MAPMODE_OBJECT;
  return false;
}

export function mapTable (collection, table = {}) {
  return (table[mapMode(collection)] || noop)();
}

export function faccimilate (collection, strict) {
  switch (isString(collection) ? collection : mapMode(collection, strict)) {
  case MAPMODE_ARRAY:    return [];
  case MAPMODE_SET:      return new Set();
  case MAPMODE_MAP:      return new Map();
  case MAPMODE_OBJECT:   return {};
  case MAPMODE_ITERABLE: return { [Symbol.iterator]: nullIterator };
  case MAPMODE_ITERATOR: return nullIterator();
  default:               return undefined;
  }
}

export function range (start, end, step = 1, predicate = null) {
  if (isFunction(step)) {
    predicate = step;
    step = 1;
  }
  assert(start <= end, 'End value must be larger than start value');
  assert(step > 0, 'Step must be a positive number');

  const result = [];
  for (let i = start; i <= end; i += step) {
    if (predicate) {
      const res = predicate(i, i, i);
      if (res !== undefined) result.push(res);
    } else {
      result.push(i);
    }
  }
  return result;
}

export function intersect (...arrays) {
  return uniq(arrays.reduce(
    (a, b) => filter(a,
      (v) => includes(b, v),
    ),
  ));
}



export function difference (...arrays) {
  return uniq(arrays.reduce(
    (a, b) => filter(a,
      (c) => !includes(b, c),
    ),
  ));
}

export function includes (collection, value) {
  if (isArray(collection)) return collection.includes(value);
  if (isSet(collection)) return collection.has(value);
  if (isMap(collection)) return Array.from(collection.values()).includes(value);
  if (isObject(collection)) return Object.values(collection).includes(value);
  return false;
}

export function arrayify (input) {
  if (isArray(input)) return input.slice();

  if (isSet(input) || isMap(input)) return Array.from(input.values());

  if (isObject(input)) return Object.values(input);

  if (isString(input)) return input.split(/,\s*/);

  return [ input ];
}

export function first (input, count = null) {
  const itr = entries(input);
  if (!itr.next) return undefined;
  if (count === null) return itr.next()?.value[1];

  const result = [];
  while (result.length < count) {
    const { value, done } = itr.next();
    if (done) break;
    result.push(value[1]);
  }
  return result;
}

export function last (input, count = 1) {
  if (count === 1) {
    if (isArray(input) || isString(input)) return input[input.length - 1];
  }

  if (isArray(input) || isString(input)) return input.slice(-count);
  if (isSet(input)) return Array.from(input).slice(-count);
  if (isObject(input)) return Object.values(input).slice(-count);
  if (isMap(input)) return Array.from(input.values()).slice(-count);
}

export function join (collection, delimiter) {
  if (isString(delimiter) || isNumber(delimiter)) {
    if (isArray(collection) || isMap(collection) || isSet(collection)) return Array.from(collection.values()).join(delimiter);
    if (isObject(collection, true)) return Object.values(collection).join(delimiter);
    if (isString(collection)) return collection.split('').join(delimiter);
    return '';
  }

  if (!(Symbol.iterator in collection)) return collection;

  const iterator = collection[Symbol.iterator]();
  const result = [];
  let next;
  while ((next = iterator.next())) {
    result.push(next.value);
    if (next.done) break;
    result.push(delimiter);
  }
  return result;
}

export function toPairs (input) {
  return input && Array.from(entries(input));
}

export function fromPairs (pairs, mode = MAPMODE_OBJECT) {
  switch (mode) {
  case MAPMODE_OBJECT:
    if (Object.fromEntries) return Object.fromEntries(pairs); // eslint-disable-line
    return mapReduce(pairs);
  case MAPMODE_MAP: return new Map(pairs);
  case MAPMODE_SET: return new Set(pairs.map(([ , v ]) => v));
  case MAPMODE_ITERABLE:
    return function* () {
      for (const [ , v ] of pairs) {
        yield v;
      }
    };

  case MAPMODE_ARRAY:
    return pairs.map((v) => v[1]);

  // no default
  }
}

export function slice (collection, begin, end) {
  if (isString(collection) || isArray(collection)) return collection.slice(begin, end);

  if (isSet(collection)) {
    return new Set(Array.from(collection.values()).slice(begin, end));
  }

  if (isMap(collection)) {
    return new Map(Array.from(collection.entries()).slice(begin, end));
  }

  if (isIterable(collection)) return Array.from(collection).slice(begin, end);

  if (isIterator(collection)) {
    assert(begin >= 0 && end >= 0, 'Negative position values cannot be used when slicing an iterator');
    const result = [];
    let i = 0;
    while (true) {
      const { value, done } = collection.next();
      if (done) break;
      if (i >= begin && i <= end) result.push(value);
      if (++i > end) break;
    }
    return result;
  }

  if (isObject(collection)) {
    return fromPairs(toPairs(collection).slice(begin, end));
  }

  return collection;
}

export function sort (collection, predicate) {

  predicate = sorter(predicate);

  if (isArray(collection)) return collection.slice().sort(predicate);

  if (isSet(collection)) {
    return new Set(Array.from(collection.values()).sort(predicate));
  }

  // sort by key for maps and objects
  const hashpredicate = (a, b) => predicate(a[0], b[0]);

  if (isMap(collection)) {
    return new Map(Array.from(collection.entries()).sort(hashpredicate));
  }

  if (isObject(collection)) {
    return fromPairs(toPairs(collection).sort(hashpredicate));
  }

  return collection;
}

export function uniq (collection, predicate = null) {

  if (!collection) return collection;

  if (!predicate && isArray(collection)) return [ ...new Set(collection) ];

  if (predicate === undefined || predicate === null) {
    predicate = (v) => v;
  } else {
    predicate = iteratee(predicate);
  }

  const exists = new Set();

  if (isArray(collection)) {
    const result = [];
    collection.forEach((v) => {
      const match = predicate(v);
      if (exists.has(match)) return;
      exists.add(match);
      result.push(v);
    });

    return result;
  }

  if (isSet(collection)) return new Set(collection); // really?

  if (isMap(collection)) {
    return new Map(Array.from(collection.entries(), ([ k, v ]) => {
      const match = predicate(v);
      if (exists.has(match)) return false;
      exists.add(match);
      return [ k, v ];
    }).filter(Boolean));
  }

  if (isObject(collection)) {
    return mapReduce(collection, (v, k) => {
      const match = predicate(v);
      if (exists.has(match)) return null;
      exists.add(match);
      return [ k, v ];
    });
  }

  return collection;
}

export function keyBy (collection, predicate) {
  predicate = iteratee(predicate);
  return mapReduce(collection, (value, key, index) =>
    [ predicate(value, key, index), value ],
  );
}

export function groupBy (collection, predicate) {
  predicate = iteratee(predicate);
  return reduce(collection, (result, value, key, index) => {
    const k = predicate(value, key, index);
    (result[k] || (result[k] = [])).push(value);
    return result;
  }, {});
}

export function filter (collection, predicate) {
  predicate = iteratee(predicate);
  const mode = mapMode(collection);

  switch (mode) {
  case MAPMODE_ARRAY:
    return collection.filter((value, i) => predicate(value, i, i));

  case MAPMODE_SET:
    return Array.from(collection).filter((value, i) => predicate(value, i, i));

  case MAPMODE_MAP:
  case MAPMODE_OBJECT: {
    const pairs = Array.from(entries(collection)).filter(([ key, value ], i) => predicate(value, key, i));
    return fromPairs(pairs, mode);
  }

  default:
    throw new Error('filter can only be applied to Arrays, Objects, Sets and Maps, perhaps you meant to use omit?');
  }
}

export function find (collection, predicate) {
  predicate = iteratee(predicate);

  let i = 0;
  for (const [ k, v ] of entries(collection)) {
    if (predicate(v, k, i++)) return v;
  }
  return false;
}

export function findIndex (collection, predicate) {
  predicate = iteratee(predicate);

  let i = 0;
  switch (mapMode(collection, true)) {
  case MAPMODE_OBJECT:
  case MAPMODE_MAP:
    for (const [ key, value ] of entries(collection)) {
      if (predicate(value, key, i++)) return key;
    }
    return false;

  case MAPMODE_SET:
  case MAPMODE_ITERABLE:
  case MAPMODE_ARRAY:
    for (const [ k, v ] of entries(collection)) {
      if (predicate(v, k, i++)) return k;
    }
    return false;
  // no default
  }

}

export function omit (collection, predicate) {
  if (isFunction(predicate)) {
    return mapReduce(collection, (value, key, index) =>
      (predicate(value, key, index)
        ? [ undefined, undefined ]
        : [ key, value ]),
    );
  }

  if (isString(predicate)) {
    predicate = [ predicate ];
  }

  if (!isArray(predicate)) throw new Error('omit requires a function, a string or and array of strings for the second argument');
  return mapReduce(collection, (value, key) =>
    (predicate.includes(key)
      ? [ undefined, undefined ]
      : [ key, value ]),
  );
}

export function pick (collection, predicate) {
  if (!collection) return {};

  if (isFunction(predicate)) {
    return mapReduce(collection, (value, key, index) =>
      (predicate(value, key, index)
        ? [ key, value ]
        : [ undefined, undefined ]),
    );
  }

  if (isString(predicate)) {
    predicate = [ predicate ];
  }

  if (!isArray(predicate)) throw new Error('pick requires a function, a string or and array of strings for the second argument');
  return predicate.reduce((obj, key) => {
    const value = get(collection, key);
    if (isUndefined(value)) return obj;
    return set(obj, key, value);
  }, {});
}

const isMarshalMap = (input) => {
  if (!isObject(input, true)) return false;
  for (const v of Object.values(input)) {
    if (!isArrayOfStrings(v)) return false;
  }
  return true;
};

export function marshal (collection, predicate, rest = 'UNKNOWN') {
  if (!collection) return {};

  const mode = mapMode(collection);
  if (!mode) throw new TypeError('Received unmappable collection.');
  const buckets = {};
  const marshallers = {
    [MAPMODE_ARRAY]: (bucket, v) => {
      if (!buckets[bucket]) buckets[bucket] = [];
      buckets[bucket].push(v);
    },
    [MAPMODE_OBJECT]: (bucket, v, k) => {
      if (!buckets[bucket]) buckets[bucket] = {};
      buckets[bucket][k] = v;
    },
    [MAPMODE_MAP]: (bucket, v, k) => {
      if (!buckets[bucket]) buckets[bucket] = new Map();
      buckets[bucket].set(k, v);
    },
    [MAPMODE_SET]: (bucket, v) => {
      if (!buckets[bucket]) buckets[bucket] = new Set();
      buckets[bucket].add(v);
    },
  };

  if (isMarshalMap(predicate)) {
    each(collection, (value, key) => {
      let matched = false;
      each(predicate, (keyset, name) => {
        if (keyset.includes(key)) {
          marshallers[mode](name, value, key);
          matched = true;
        }
      });
      if (!matched) {
        marshallers[mode](rest, value, key);
      }
    });
    return buckets;
  }

  if (isFunction(predicate)) {
    each(collection, (value, key, index) => {
      marshallers[mode](predicate(value, key, index) ?? key, value, key);
    });
    return buckets;
  }

  if (isString(predicate)) {
    predicate = [ predicate ];
  }

  if (!isArray(predicate)) throw new Error('marshal requires a function, a string, an array of strings, or an object map of string arrays for the second argument');
  const targets = new Set(predicate);
  each(collection, (value, key) => {
    marshallers[mode](targets.has(key) ? 0 : 1, value, key);
  });
  return [ buckets[0] || faccimilate(collection), buckets[1] || faccimilate(collection) ];
}


export function deepPick (collection, schema) {
  if (isPrimitive(schema) && isPrimitive(collection)) return collection;

  if (isArray(schema) && schema.length > 0) {
    // collection does not match this schema tier, abort
    if (!isArray(collection)) return;

    schema = schema[0];
    return collection.map((branch) => deepPick(branch, schema));
  }

  // if the schema at this tier is not an object,
  // return the value at this tier only if schema is truthy
  if (!isObject(schema)) return schema ? collection : undefined;
  if (isPrimitive(collection)) return;

  // if the collection isn't something we can pull data from, skip it
  if (!isObject(collection) && !isFunction(collection)) return;

  const result = {};
  for (const [ key, subschema ] of Object.entries(schema)) {

    const target = collection[key];
    if (isUndefined(target)) continue;

    const child = deepPick(target, subschema);
    if (isUndefined(child)) continue;

    result[key] = child;
  }

  return result;
}


/**
 * Generates a list of all possible paths within an object
 * @param  {Object} object
 * @param  {String} delimiter
 * @return {Array<String>}
 */
export function pathinate (object, delimiter = '.') {
  const paths = [];

  function descend (branch, ancest) {
    if (!isObject(branch)) {
      paths.push(ancest.join(delimiter));
      return;
    }
    for (const [ k, v ] of Object.entries(branch)) {
      descend(v, ancest.concat([ k ]));
    }
    return;
  }

  descend(object, []);

  return uniq(paths);
}

/**
 * Creates a function for remapping data from larger data sets with different field names/types.
 *
 * @param  {Array} datamap An array of directions. Each direction is an array in the format
 * of `sourcePath[, targetPath][, transformation]`. If targetPath is omitted, sourcePath will be used
 * as the destination. Transformation receives the source value as a single argument.
 * @return {Function} Returned function accepts a source object and a predicate function.
 * The predicate function receives `value, { from, to }, index`.
 */
export function transcriber (datamap) {
  return function (source, predicate) {
    const result = {};
    datamap.forEach(([ from, to, trans ], index) => {
      if (source[from] === undefined) return;
      if (typeof to === 'function') {
        trans = to;
        to = from;
      } else if (to === undefined) to = from;

      const value = trans ? trans(source[from]) : source[from];

      result[to] = predicate ? predicate(value, { from, to }, index) : value;
    });
    return result;
  };
}

export function map (collection, predicate) {
  predicate = iteratee(predicate);

  if (isString(collection)) {
    collection = collection.split('');
  }

  const it = entries(collection);
  const subpredicate = ([ k, v ], i) => predicate(v, k, i);

  return Array.from(it, subpredicate);
}

export function mapValues (collection, predicate) {
  assert(isMap(collection) || isObject(collection, true), 'mapValues only works for simple objects, use mapReduce.');
  predicate = iteratee(predicate);

  const result = {};

  let i = 0;
  for (const [ key, value ] of entries(collection)) {
    result[key] = predicate(value, key, i++);
  }

  return result;
}

/**
 * Iterates over a collection, ignoring the results
 * @param  {Object|Array|Map|Set} collection
 * @param  {Function} iteratee Callback invoked for each item, receives `value, key, index`, returns `[key, value]`;
 * @return {Object}
 */
export function each (collection, predicate) {
  if (!collection) return {};

  let i = 0;
  for (const [ key, value ] of entries(collection)) {
    if (predicate(value, key, i++) === false) break;
  }

  return collection;
}

/**
 * Iterates over a collection and generates an object based on tuple returned from the iteratee.
 * @param  {Object|Array|Map|Set} collection
 * @param  {Function} iteratee Callback invoked for each item, receives `value, key, index`, returns `[key, value]`;
 * @return {Object}
 */
export function mapReduce (collection, predicate) {
  if (!collection) return {};

  const result = {};

  let i = 0;
  for (const [ k, v ] of entries(collection)) {
    const res = predicate(v, k, i++);
    if (res === false) return result;
    if (!isArray(res)) continue;
    const [ key, value ] = res;
    if (isUndefinedOrNull(key) || isUndefined(value)) continue;
    result[key] = value;
  }

  return result;
}

export function reduce (collection, predicate, initial) {
  assert(isFunction(predicate), 'Predicate must be a function');

  let result = initial;
  let i = 0;
  for (const [ k, v ] of entries(collection)) {
    result = predicate(result, v, k, i++);
  }

  return result;
}

export function flatten (collection, depth = Infinity) {
  if (!isMappable(collection)) return [ collection ];
  if (depth <= 0) return slice(collection);
  return reduce(collection,
    (acc, val) => acc.concat(...(
      isMappable(val)
        ? flatten(val, depth - 1)
        : [ val ]
    )),
    [],
  );
}
