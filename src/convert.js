
import { assert } from './assert.js';
import distanceUnit from './convert-distances.js';

function convert (unitSet, value, from_, to_ = 'meters') {
  const from = distanceUnit(from_);
  const to = distanceUnit(to_);
  assert(from, `Could not find a unit named "${from_}"`);
  assert(to, `Could not find a unit named "${to_}"`);
  if (typeof value === 'string') value = Number(value.replace(/(?!^-)[^0-9.]/g, ''));
  const ratio = from.ratio / to.ratio;
  return (value * ratio) + (from.difference || 0) - (to.difference || 0);
}

export function distance (...args) {
  return convert(distanceUnit, ...args);
}
