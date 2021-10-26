
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
  return String(input).replace(/((?:\S[^.?!]*)[.?!]*)/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}

export function ucwords (input) {
  return String(input).replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1));
}

var rUpper = /([A-Z])/g;
export function camelToHyphen (input) {
  return String(input).replace(rUpper, '-$1').toLowerCase();
}

export function camelToSnake (input) {
  return String(input).replace(rUpper, '_$1').toLowerCase();
}

export function camelToUpperSnake (input) {
  return String(input).replace(rUpper, '_$1').toUpperCase();
}

export function jsonSoftParse (input, fallback) {
  if (typeof input !== 'string') return input;
  try {
    return JSON.parse(input);
  } catch (e) {
    return fallback;
  }
}

export function similarity (str1, str2) {
  function get_bigrams (string) {
    var s = string.toLowerCase();
    var v = s.split('');
    for (var i = 0; i < v.length; i++) {
      v[i] = s.slice(i, i + 2);
    }
    return v;
  }

  if (str1.length && str2.length) {
    var pairs1 = get_bigrams(str1);
    var pairs2 = get_bigrams(str2);
    var union = pairs1.length + pairs2.length;
    var hits = 0;
    for (var x = 0; x < pairs1.length; x++) {
      for (var y = 0; y < pairs2.length; y++) {
        if (pairs1[x] === pairs2[y]) hits++;
      }
    }
    if (hits > 0) return ((2.0 * hits) / union);
  }
  return 0.0;
}
