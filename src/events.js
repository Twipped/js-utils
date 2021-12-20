
export default class EventEmitter {
  constructor () {
    this.__ee__ = new Map;
  }

  on (type, listener) {
    var d = this.__ee__;
    if (!d.has(type)) d.set(type, new Map);
    var ls = d.get(type);
    ls.set(listener, listener);

    return this;
  }

  once (type, listener) {
    var d = this.__ee__;
    if (!d.has(type)) d.set(type, new Map);
    var ls = d.get(type);

    var l = (...args) => {
      this.off(type, l);
      listener.apply(this, args);
    };

    ls.set(listener, l);

    return this;
  }

  off (type, listener) {
    if (arguments.length === 0) {
      // purge all listeners
      this.__ee__ = new Map();
      return this;
    }

    var listeners = this.__ee__.get(type);

    if (arguments.length === 1 || !listener) {
      listeners && listeners.clear();
      this.__ee__.delete(type);
      return this;
    }

    listeners && listeners.delete(listener);
    return this;
  }

  emit (type, ...args) {
    var d = this.__ee__;
    if (!d.has(type)) return this;
    var listeners = d.get(type);
    for (const fn of listeners.values()) {
      try {
        fn.apply(this, args);
      } catch (err) {
        console.error(err); // eslint-disable-line no-console
      }
    }
    return this;
  }
}
