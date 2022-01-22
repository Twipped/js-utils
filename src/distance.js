/* global Unit, UnitMap */

import convert from './convert.js';

/**
 * @constant {UnitMap}
 * @private
 */
const METER = {
  names: [
    'meter',
    'meters',
    'metre',
    'metres',
    'm',
    'sqm',
  ],
  ratio: 1,
};

/**
 * @constant {UnitMap}
 * @private
 */
const PETAMETER = {
  names: [
    'petameter',
    'petametre',
    'petameters',
    'petametres',
    'Pm',
    'sqpm',
  ],
  ratio: 1e15,
};

/**
 * @constant {UnitMap}
 * @private
 */
const TERAMETER = {
  names: [
    'terameter',
    'terametre',
    'terameters',
    'terametres',
    'Tm',
    'sqtm',
  ],
  ratio: 1e12,
};

/**
 * @constant {UnitMap}
 * @private
 */
const GIGAMETER = {
  names: [
    'gigameter',
    'gigametre',
    'gigameters',
    'gigametres',
    'Gm',
    'sqgm',
  ],
  ratio: 1e9,
};

/**
 * @constant {UnitMap}
 * @private
 */
const MEGAMETER = {
  names: [
    'megameter',
    'megametre',
    'megameters',
    'megametres',
    'Mm',
    'sqmm',
  ],
  ratio: 1e6,
};

/**
 * @constant {UnitMap}
 * @private
 */
const KILOMETER = {
  names: [
    'kilometer',
    'kilometre',
    'kilometers',
    'kilometres',
    'km',
    'sqkm',
  ],
  ratio: 1e3,
};

/**
 * @constant {UnitMap}
 * @private
 */
const HECTOMETER = {
  names: [
    'hectometer',
    'hectometre',
    'hectometers',
    'hectometres',
    'hm',
    'sqhm',
  ],
  ratio: 1e2,
};

/**
 * @constant {UnitMap}
 * @private
 */
const DECAMETER = {
  names: [
    'decameter',
    'decametre',
    'decameters',
    'decametres',
    'dam',
    'sqdam',
  ],
  ratio: 10,
};

/**
 * @constant {UnitMap}
 * @private
 */
const DECIMETER = {
  names: [
    'decimeter',
    'decimetre',
    'decimeters',
    'decimetres',
    'dm',
    'sqdm',
  ],
  ratio: 1e-1,
};

/**
 * @constant {UnitMap}
 * @private
 */
const CENTIMETER = {
  names: [
    'centimeter',
    'centimetre',
    'centimeters',
    'centimetres',
    'cm',
    'sqcm',
  ],
  ratio: 1e-2,
};

/**
 * @constant {UnitMap}
 * @private
 */
const MILLIMETER = {
  names: [
    'millimeter',
    'millimetre',
    'millimeters',
    'millimetres',
    'mm',
    'sqmm',
  ],
  ratio: 1e-3,
};


/**
 * @constant {UnitMap}
 * @private
 */
const MICROMETER = {
  names: [
    'micrometer',
    'micrometre',
    'micrometers',
    'micrometres',
    'um',
    'μm',
    'squm',
  ],
  ratio: 1e-7,
};

/**
 * @constant {UnitMap}
 * @private
 */
const NANOMETER = {
  names: [
    'nanometer',
    'nanometre',
    'nanometers',
    'nanometres',
    'nm',
    'sqnm',
  ],
  ratio: 1e-9,
};

/**
 * @constant {UnitMap}
 * @private
 */
const PICOMETER = {
  names: [
    'picometer',
    'picometre',
    'picometers',
    'picometres',
    'pm',
    'sqqm',
  ],
  ratio: 1e-12,
};

/**
 * @constant {UnitMap}
 * @private
 */
const FEMTOMETER = {
  names: [
    'femtometer',
    'femtometre',
    'femtometers',
    'femtometres',
    'fm',
    'sqfm',
  ],
  ratio: 1e-15,
};

/**
 * @constant {UnitMap}
 * @private
 */
const FOOT = {
  names: [
    'foot',
    'feet',
    'ft',
    'sqft',
    'sf',
  ],
  ratio: 0.3048,
};

/**
 * @constant {UnitMap}
 * @private
 */
const INCH = {
  names: [
    'inch',
    'inches',
    'in',
    'sqin',
  ],
  ratio: 0.0254,
};

/**
 * @constant {UnitMap}
 * @private
 */
const YARD = {
  names: [
    'yard',
    'yards',
    'yd',
    'sqyd',
  ],
  ratio: 0.9144,
};

/**
 * @constant {UnitMap}
 * @private
 */
const MILE = {
  names: [
    'mile',
    'miles',
    'mi',
    'sqmi',
  ],
  ratio: 1609.344,
};

/**
 * @constant {UnitMap}
 * @private
 */
const NAUTICAL_MILE = {
  names: [
    'nautical mile',
    'nautical miles',
    'nmi',
    'knot',
    'knots',
  ],
  ratio: 1852,
};

/**
 * @constant {UnitMap}
 * @private
 */
const ACRE = {
  names: [
    'acre',
    'acres',
    'ac',
  ],
  ratio: 4046.86,
};

/**
 * @constant {UnitMap}
 * @private
 */
const DISTANCES = /* #__PURE__*/[
  METER,
  PETAMETER,
  TERAMETER,
  GIGAMETER,
  MEGAMETER,
  KILOMETER,
  HECTOMETER,
  DECAMETER,
  DECIMETER,
  CENTIMETER,
  MILLIMETER,
  MICROMETER,
  NANOMETER,
  PICOMETER,
  FEMTOMETER,
  FOOT,
  INCH,
  YARD,
  MILE,
  NAUTICAL_MILE,
  ACRE,
].reduce((map, UNIT) => {
  const { names } = UNIT;
  for (const name of names) map[name.toLowerCase()] = UNIT;
  return map;
}, {});

/**
 * Given a unit name, it searches for the correct unit.
 *
 * @function lookupDistanceConverter
 * @private
 *
 * @param   {string} name
 *
 * @returns {Unit}
 */
export function lookup (name) {
  return DISTANCES[name.toLowerCase()] || null;
}
lookup.units = DISTANCES;


/**
 * Convert a value from one unit of distance to another.
 *
 * @param   {string|number} value
 * @param   {string} from Source unit name
 * @param   {string} to Target unit name
 *
 * @returns {number}
 */
export default function distance (value, from, to) {
  return convert(lookup, value, from, to);
}
