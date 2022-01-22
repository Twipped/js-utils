/* global Predicate */

import iteratee from './iteratee.js';

/**
 * Queries the document/element for any elements matching the given selector, and returns an array.
 *
 * @param   {Element} [el] Restrict the search to the contents of the given DOMElement
 * @param   {string} selector
 * @param   {Predicate} [predicate] Optional predicate function to transform the found elements.
 *
 * @returns {Array}
 * @category DOM
 */
export function qsa (el, selector, predicate) {
  if (typeof el === 'string') {
    predicate = selector;
    selector = el;
    el = document;
  }
  predicate = predicate && iteratee(predicate);
  return Array.from(el.querySelectorAll(selector), predicate);
}

/**
 * Returns true of the provided DOMElement has the given classname
 *
 * @param   {Element}  el
 * @param   {string}  className
 *
 * @returns {boolean}
 * @category DOM
 */
export function hasClassName (el, className) {
  var eClassName = el.className;
  return (eClassName.length > 0 && (eClassName === className || new RegExp(/(^|\\s)/ + className + /(\\s|$)/).test(eClassName)));
}

/**
 * Adds the given classname to the provided DOMElement
 *
 * @param {Element} el
 * @param {string} className
 * @category DOM
 */
export function addClassName (el, className) {
  if (!hasClassName(el, className)) el.className += (el.className ? ' ' : '') + className;
}

/**
 * Removes the given classname to the provided DOMElement, if it exists
 *
 * @param {Element} el
 * @param {string} className
 * @category DOM
 */
export function removeClassName (el, className) {
  el.className = el.className.replace(new RegExp(/(^|\\s+)/ + className + /(\\s+|$)/), ' ').trim();
}
