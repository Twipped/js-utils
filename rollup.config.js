import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import banner from 'rollup-plugin-banner';
import { join } from 'path';

const bannerConfig = {
  file: join(__dirname, 'LICENSE.txt'),
};

const external = [
  'crypto',
  'stream',
  'fs',
  'stream',
  'path',
  'util',
];

export default [

  {
    input: 'src/index.js',
    output: {
      file: 'dist/utils.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      banner(bannerConfig),
    ],
    external,
  },

  {
    input: 'src/index.js',
    output: {
      file: 'dist/utils.esm.js',
      format: 'esm',
    },
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      banner(bannerConfig),
    ],
    external,
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/utils.esm.min.js',
      format: 'esm',
    },
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      terser({
        output: {
          comments: false,
        },
        compress: {
          ecma: 2018,
          keep_classnames: true,
          module: true,
        },
      }),
      banner(bannerConfig),
    ],
    external,
  },

  {
    input: 'src/index.js',
    output: {
      file: 'dist/utils.browser.js',
      format: 'umd',
      exports: 'named',
      name: 'TwippedUtils',
    },
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: [
          '@babel/env',
        ],
      }),
      terser({ output: {
        comments: false,
      } }),
      banner(bannerConfig),
    ],
    external,
  },
];
