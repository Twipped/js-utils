
import { DEFAULT } from './isType.js';

const MODE_ENTRIES = 'ENTRIES';
const MODE_VALUES = 'VALUES';
const MODE_KEYS = 'KEYS';
const MODE_LEAVES = 'LEAVES';


const EMPTY_KEY = Symbol('EMPTY_KEY');


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

