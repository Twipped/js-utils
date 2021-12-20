import { iteratee } from './functions.js';

export function qsa (el, selector, predicate) {
  if (typeof el === 'string') {
    predicate = selector;
    selector = el;
    el = document;
  }
  predicate = predicate && iteratee(predicate);
  return Array.from(el.querySelectorAll(selector), predicate);
}

export function hasClassName (el, className) {
  var eClassName = el.className;
  return (eClassName.length > 0 && (eClassName === className || new RegExp(/(^|\\s)/ + className + /(\\s|$)/).test(eClassName)));
}

export function addClassName (el, className) {
  if (!hasClassName(el, className)) el.className += (el.className ? ' ' : '') + className;
}

export function removeClassName (el, className) {
  el.className = el.className.replace(new RegExp(/(^|\\s+)/ + className + /(\\s+|$)/), ' ').trim();
}
