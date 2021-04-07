
import { assert } from './assert';
import distanceUnit from './convert-distances';

function convert (unitSet, value, from, to = 'meters') {
  from = distanceUnit(from);
  to = distanceUnit(to);
  assert(from, `Could not find a unit named "${from}`);
  assert(to, `Could not find a unit named "${to}`);

  const ratio = from.ratio / to.ratio;
  return (value * ratio) + (from.difference || 0) - (to.difference || 0);
}

export function distance (...args) {
  return convert(distanceUnit, ...args);
}
