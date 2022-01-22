
/**
 * Compares two strings to determine how similar they are.
 *
 * @param   {string} str1
 * @param   {string} str2
 *
 * @returns {number}
 * @category Text
 */
export default function similarity (str1, str2) {

  const getBigrams = (string) => {
    var s = string.toLowerCase();
    var v = s.split('');
    for (var i = 0; i < v.length; i++) {
      v[i] = s.slice(i, i + 2);
    }
    return v;
  };

  if (str1.length && str2.length) {
    var pairs1 = getBigrams(str1);
    var pairs2 = getBigrams(str2);
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
