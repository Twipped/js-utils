
// htmlEscape copied from Sindre Sorhus' escape-goat
export const htmlEscape = (input) => input
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
;

export function stripIndent (input) {
  if (Array.isArray(input)) return input.map(stripIndent).join('');
  const match = input.match(/^[^\S\n]*(?=\S)/gm);
  const indent = match && Math.min(...match.map((el) => el.length));
  if (indent) {
    const regexp = new RegExp(`^.{${indent}}`, 'gm');
    input = input.replace(regexp, '');
  }

  return input;
}


export function cl (...args) {
  return args.flat(Infinity).filter(Boolean).join(' ');
}

export function clRemap (input, classMap) {
  if (typeof input === 'string') input = input.split(' ');
  if (!Array.isArray(input)) return '';
  return input.flat(Infinity).map((c) => classMap[c] || c).filter(Boolean).join(' ');
}

export function lc (input) {
  return typeof input === 'string' ? input.toLowerCase() : input;
}

export function uc (input) {
  return typeof input === 'string' ? input.toUpperCase() : input;
}

export function ucfirst (input) {
  input = String(input);
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function ucsentence (input) {
  return input.replace(/((?:\S[^.?!]*)[.?!]*)/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}

export function ucwords (input) {
  return input.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1));
}

var rUpper = /([A-Z])/g;
export function camelToHyphen (input) {
  return input.replace(rUpper, '-$1').toLowerCase();
}

export function camelToSnake (input) {
  return input.replace(rUpper, '_$1').toLowerCase();
}

export function camelToUpperSnake (input) {
  return input.replace(rUpper, '_$1').toUpperCase();
}

export function jsonSoftParse (input, fallback) {
  if (typeof input !== 'string') return input;
  try {
    return JSON.parse(input);
  } catch (e) {
    return fallback;
  }
}
