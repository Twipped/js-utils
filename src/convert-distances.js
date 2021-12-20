
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

const INCH = {
  names: [
    'inch',
    'inches',
    'in',
    'sqin',
  ],
  ratio: 0.0254,
};

const YARD = {
  names: [
    'yard',
    'yards',
    'yd',
    'sqyd',
  ],
  ratio: 0.9144,
};

const MILE = {
  names: [
    'mile',
    'miles',
    'mi',
    'sqmi',
  ],
  ratio: 1609.344,
};

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

const ACRE = {
  names: [
    'acre',
    'acres',
    'ac',
  ],
  ratio: 4046.86,
};

const unitMap = /* #__PURE__*/[
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

export default function lookup (name) {
  return unitMap[name.toLowerCase()] || null;
}
lookup.units = unitMap;
