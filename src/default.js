/**
 * A Symbol which identifies a default value.
 *
 * @type {Symbol}
 */
const DEFAULT = Symbol('DEFAULT');

export default DEFAULT;
export const isDefault = (input) => input === DEFAULT;
