
import { dirname } from 'path';
import { promises as fs, constants as fsConstants } from 'fs';
import stream from 'stream';
import { promisify } from 'util';

export const pipeline = promisify(stream.pipeline);
export const mkdir = (f, recursive = true) => fs.mkdir(f, { recursive });
export const exists = (f) => fs.access(f).then(() => true, () => false);
export const stat = (f) => fs.stat(f).catch(() => null);
export const linkStat = (f) => fs.lstat(f).catch(() => null);

export async function isWritable (file) {
  try {
    await fs.access(file, fsConstants.F_OK | fsConstants.W_OK);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return await fs.access(dirname(file), fsConstants.F_OK | fsConstants.W_OK).then(() => true, () => false);
    }
    return false;
  }
}

export async function touch (file) {
  const stats = await linkStat(file);
  if (stats) {
    if (stats.isDirectory()) return; // nothing to do
    return await fs.utimes(file, new Date, new Date);
  }

  if (!await exists(dirname(file))) await mkdir(dirname(file));

  await fs.writeFile(file, '');
}

export async function remove (file) {
  const stats = await linkStat(file);
  if (!stats) return;
  if (stats.isDirectory()) return fs.rmdir(file, { recursive: true });
  return fs.unlink(file);
}

export async function writeJson (file, object, options) {
  const { replacer, spaces, ...ops } = {
    encoding: 'utf8',
    ...options,
  };
  await fs.writeFile(file, `${JSON.stringify(object, replacer, spaces)}\n`, ops);
}
export const writeJSON = writeJson;

export async function readJson (file, options) {
  const { reviver, quiet, ...ops } = {
    encoding: 'utf8',
    ...options,
  };

  const content = await fs.readFile(file, ops);
  try {
    return JSON.parse(stripBom(content), reviver);
  } catch (err) {
    if (!quiet) throw err;
    return undefined;
  }
}
export const readJSON = readJson;


function stripBom (content) {
  if (Buffer.isBuffer(content)) { content = content.toString('utf8'); }
  return content.replace(/^\uFEFF/, '');
}

