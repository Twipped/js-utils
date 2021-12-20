
import { isDate, isUndefinedOrNull } from './isType.js';
import { flatten } from './collections.js';

export function clamp (value, minv = -Infinity, maxv = Infinity, nearest) {
  if (value === undefined || value === null || value === '') return null;
  if (minv === undefined || minv === null || minv === '') minv = -Infinity;
  if (maxv === undefined || maxv === null || maxv === '') maxv = Infinity;

  let v = value;
  if (nearest) {
    if (v >= maxv) {
      v = maxv;
    } else if (v <= minv) {
      v = minv;
    } else {
      v = Math.round(v / nearest) * nearest;
    }
  } else {
    v = Math.max(Math.min(v, maxv), minv);
  }

  if (isDate(value)) return new Date(v);
  return v;
}

export function min (...collection) {
  collection = flatten(collection);
  if (isDate(collection[0])) return new Date(Math.min(...collection));
  return Math.min(...collection);
}

export function max (...collection) {
  collection = flatten(collection);
  if (isDate(collection[0])) return new Date(Math.max(...collection));
  return Math.max(...collection);
}

export function sum (...collection) {
  collection = flatten(collection);
  return collection.reduce((a, b) => a + b, 0);
}

export function avg (...collection) {
  if (!collection.length) return 0;
  collection = flatten(collection);
  const sums = collection.reduce((a, b) => a + b, 0);
  return sums / collection.length;
}

export function median (...collection) {
  if (!collection.length) return 0;
  collection = flatten(collection);

  if (collection.length % 2) {
    const i = Math.floor(collection.length / 2);
    return collection[i];
  }

  const i = Math.floor(collection.length / 2);
  return (Number(collection[i]) + (collection[i + 1])) / 2;
}

export function stddev (...collection) {
  if (!collection.length) return 0;
  collection = flatten(collection);
  const sums = collection.reduce((a, b) => a + b, 0);
  const mean = sums / collection.length;
  let totDiff = 0;
  for (const value of collection) {
    const diff = value - mean;
    const sq = diff * diff;
    totDiff += sq;
  }
  return Math.sqrt(totDiff / collection.length);
}

export function floor (value, nearest = 1) {
  if (nearest <= 0 || nearest === 1) return Math.floor(value);
  return Math.floor(value / nearest) * nearest;
}

export function ceil (value, nearest = 1) {
  if (nearest <= 0 || nearest === 1) return Math.ceil(value);
  return Math.ceil(value / nearest) * nearest;
}

export function round (value, nearest = 1) {
  if (nearest <= 0 || nearest === 1) return Math.round(value);
  return Math.round(value / nearest) * nearest;
}

export function isBetween (value, vmin, vmax) {
  if (isUndefinedOrNull(vmin)) vmin = -Infinity;
  if (isUndefinedOrNull(vmax)) vmax = Infinity;
  return value >= vmin && value <= vmax;
}

export function isNotBetween (value, vmin, vmax) {
  if (isUndefinedOrNull(vmin)) vmin = -Infinity;
  if (isUndefinedOrNull(vmax)) vmax = Infinity;
  return value > vmin && value < vmax;
}
