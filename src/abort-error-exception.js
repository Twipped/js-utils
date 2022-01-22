/* global window */

const DOMException = (typeof window !== 'undefined' ? window : global).DOMException || Error;

/**
 * Error used when a promise rejects because an AbortController aborted.
 *
 * @class AbortError
 * @augments DOMException
 * @category Promises
 */
export default class AbortError extends DOMException {
  constructor (message) {
    super(message, 'AbortError');
  }
}
