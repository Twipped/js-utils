
import DEFAULT from './default.js';

const /** @constant {string} */ MODE_ENTRIES = 'ENTRIES';
const /** @constant {string} */ MODE_VALUES  = 'VALUES';
const /** @constant {string} */ MODE_KEYS    = 'KEYS';
const /** @constant {string} */ MODE_LEAVES  = 'LEAVES';
const /** @constant {Symbol} */ EMPTY_KEY = Symbol('EMPTY_KEY');
/** @enum {string} */ export const ITERATOR_MODE = {
  [MODE_ENTRIES]: MODE_ENTRIES,
  [MODE_VALUES]:  MODE_VALUES,
  [MODE_KEYS]:    MODE_KEYS,
  [MODE_LEAVES]:  MODE_LEAVES,
};

/**
 * Dictionary map which stores values using key sets, rather than single keys.
 *
 * @category Data
 */
export default class MultiMap {

  constructor () {
    this.clear();
  }

  clear () {
    this._trunk = new Limb(this, 'trunk');
    this._count = 0;
  }

  get size () {
    return this._count;
  }

  pluck () {
    this._count = 0;
  }

  setLeaf (key, value) {
    if (!Array.isArray(key)) key = [ key ];
    if (!key.length) key = [ EMPTY_KEY ];
    const leaf = this._trunk.shinny(...key);
    if (leaf.value === DEFAULT) {
      this._count++;
    }
    leaf.value = value;
    return leaf;
  }

  getLeaf (key) {
    if (!Array.isArray(key)) key = [ key ];
    if (!key.length) key = [ EMPTY_KEY ];
    const leaf = this._trunk.climb(...key);
    return leaf && leaf.value !== DEFAULT && leaf;
  }

  set (key, value) {
    this.setLeaf(key, value);
    return this;
  }

  get (key) {
    return (this.getLeaf(key) || {}).value;
  }

  has (key) {
    if (!Array.isArray(key)) key = [ key ];
    if (!key.length) key = [ EMPTY_KEY ];
    const leaf = this._trunk.climb(...key);
    return leaf && leaf.value !== DEFAULT;
  }

  delete (key) {
    if (!Array.isArray(key)) key = [ key ];
    if (!key.length) key = [ EMPTY_KEY ];
    const leaf = this._trunk.climb(...key);
    if (leaf) {
      this._count--;
      leaf.pluck();
    }
  }

  entries () {
    return iterator(this._trunk, MODE_ENTRIES);
  }

  values () {
    return iterator(this._trunk, MODE_VALUES);
  }

  keys () {
    return iterator(this._trunk, MODE_KEYS);
  }

  leaves () {
    return iterator(this._trunk, MODE_LEAVES);
  }

  [Symbol.iterator] () {
    return this.entries();
  }

}

/**
 * @private
 */
class Limb {
  constructor (parent, key) {
    this.parent = parent;
    this._limbs = new Map();
    this._leaf = null;
    this.key = key;
  }

  get keysize () {
    return this._limbs.size;
  }

  climb (key, ...grips) {
    if (!this._limbs.has(key)) return;
    const limb = this._limbs.get(key);
    if (!grips.length) return limb._leaf;
    return limb.climb(...grips);
  }

  shinny (key, ...grips) {
    var limb = this._limbs.get(key);
    if (!limb) {
      limb = new Limb(this, key);
      this._limbs.set(key, limb);
    }

    if (grips.length) return limb.shinny(...grips);
    if (limb._leaf) return limb._leaf;
    limb._leaf = new Leaf(limb);
    return limb._leaf;
  }

  pluck (key = DEFAULT) {
    if (key === DEFAULT) {
      // plucking the value
      this._leaf = null;
    } else {
      // plucking a key
      this._limbs.delete(key);
    }

    // a little cleanup optimization
    if (this._leaf && this._leaf === DEFAULT) this._leaf = null;

    if (!this._leaf && !this._limbs.size && this.parent) this.parent.pluck(this.key);
  }

}

/**
 * @private
 */
class Leaf {
  constructor (parent, value = DEFAULT) {
    this.parent = parent;
    this.value = value;
  }

  pluck () {
    this.value = null;
    this.parent.pluck();

    // var root = this.parent;
    // while (root.parent) root = root.parent;
    // root.pluck();
  }

  get () {
    return this.value !== DEFAULT ? this.value : undefined;
  }

  set (value) {
    this.value = value;
    return this;
  }
}

/**
 * Generator for iterating through multimaps
 *
 * @private
 * @param  {Limb} tree
 * @param  {ITERATOR_MODE} mode
 * @param  {Array}  segments
 *
 * @yields {Leaf}
 */
function* iterator (tree, mode = MODE_ENTRIES, segments = []) {
  for (const [ key, limb ] of tree._limbs.entries()) {
    const seg = segments.concat([ key ]);
    if (limb._leaf && limb._leaf.value !== DEFAULT) {
      switch (mode) {
      case MODE_LEAVES:
        yield limb._leaf;
        break;
      case MODE_ENTRIES:
        yield [ seg, limb._leaf.value ];
        break;
      case MODE_VALUES:
        yield limb._leaf.value;
        break;
      case MODE_KEYS:
        yield seg;
        break;
      // no default
      }
    }
    yield* iterator(limb, mode, seg);
  }
}

