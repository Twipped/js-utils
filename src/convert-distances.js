
export const METER = {
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

export const PETAMETER = {
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

export const TERAMETER = {
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

export const GIGAMETER = {
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

export const MEGAMETER = {
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

export const KILOMETER = {
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

export const HECTOMETER = {
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

export const DECAMETER = {
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

export const DECIMETER = {
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

export const CENTIMETER = {
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

export const MILLIMETER = {
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


export const MICROMETER = {
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

export const NANOMETER = {
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

export const PICOMETER = {
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

export const FEMTOMETER = {
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

export const FOOT = {
  names: [
    'foot',
    'feet',
    'ft',
    'sqft',
    'sf',
  ],
  ratio: 0.3048,
};

export const INCH = {
  names: [
    'inch',
    'inches',
    'in',
    'sqin',
  ],
  ratio: 0.0254,
};

export const YARD = {
  names: [
    'yard',
    'yards',
    'yd',
    'sqyd',
  ],
  ratio: 0.9144,
};

export const MILE = {
  names: [
    'mile',
    'miles',
    'mi',
    'sqmi',
  ],
  ratio: 1609.344,
};

export const NAUTICAL_MILE = {
  names: [
    'nautical mile',
    'nautical miles',
    'nmi',
    'knot',
    'knots',
  ],
  ratio: 1852,
};

export const ACRE = {
  names: [
    'acre',
    'acres',
    'ac',
  ],
  ratio: 4046.86,
};

const unitMap = [
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
