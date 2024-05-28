
import { dirname } from 'path';
import { promises as fs, constants as fsConstants } from 'fs';
import stream from 'stream';
import { promisify } from 'util';

export const pipeline = promisify(stream.pipeline);
export const mkdir = (f, recursive = true) => fs.mkdir(f, { recursive });
export const exists = (f) => fs.access(f).then(() => true, () => false);
export const stat = (f) => fs.stat(f).catch(() => null);
export const linkStat = (f) => fs.lstat(f).catch(() => null);

/**
 * Confirms if a given path is writable.
 *
 * @param   {string}  file
 *
 * @returns {Promise<boolean>}
 * @category File System
 */
export async function isWritable (file) {
  try {
    await fs.access(file, fsConstants.F_OK | fsConstants.W_OK);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return fs.access(dirname(file), fsConstants.F_OK | fsConstants.W_OK).then(() => true, () => false);
    }
    return false;
  }
}

/**
 * Attempts to create a file at the given path, creating any missing folders along the way.
 * If the file already exists, its modification time will be updated.
 *
 * @param   {string} file
 * @returns {Promise}
 *
 * @category File System
 */
export async function touch (file) {
  const stats = await linkStat(file);
  if (stats) {
    if (stats.isDirectory()) return; // nothing to do
    fs.utimes(file, new Date, new Date);
    return;
  }

  if (!await exists(dirname(file))) await mkdir(dirname(file));

  await fs.writeFile(file, '');
}

/**
 * Deletes the file at the given path, if it exists.
 *
 * @param   {string} file
 * @returns {Promise}
 *
 * @category File System
 */
export async function remove (file) {
  const stats = await linkStat(file);
  if (!stats) return undefined;
  if (stats.isDirectory()) return fs.rmdir(file, { recursive: true });
  return fs.unlink(file);
}

/**
 * Write the passed data structure to a file as JSON.
 *
 * @param   {string} file
 * @param   {object | Array} object
 * @param   {object} [options] Options for fs.writeFile
 * @param   {string} [options.encoding] File encoding for the data, defaults to utf8
 *
 * @alias writeJSON
 * @category File System
 */
export async function writeJson (file, object, options) {
  const { replacer, spaces, ...ops } = {
    encoding: 'utf8',
    ...options,
  };
  await fs.writeFile(file, `${JSON.stringify(object, replacer, spaces)}\n`, ops);
}
export const writeJSON = writeJson;

/**
 * Reads a JSON file from disk and parses its contents.
 *
 * @param   {string}   file
 * @param   {object}   [options] Options for fs.readFile
 * @param   {Function} [options.reviver]
 * @param   {boolean}  [options.quiet]
 * @param   {string}   [options.encoding] File encoding for the data, defaults to utf8
 *
 * @returns {object | Array | string | number | boolean}
 * @alias readJSON
 * @category File System
 */
export async function readJson (file, { reviver, quiet, ...options } = {}) {
  options = {
    encoding: 'utf8',
    ...options,
  };

  const content = await fs.readFile(file, options);
  try {
    return JSON.parse(stripBom(content), reviver);
  } catch (err) {
    if (!quiet) throw err;
    return undefined;
  }
}
export const readJSON = readJson;


/**
 * Removes the Byte Order Mark from a string
 *
 * @param   {string|Buffer} content
 *
 * @returns {string}
 * @category File System
 */
function stripBom (content) {
  if (Buffer.isBuffer(content)) { content = content.toString('utf8'); }
  return content.replace(/^\uFEFF/, '');
}

