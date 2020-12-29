import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import banner from 'rollup-plugin-banner';
import { join } from 'path';

const bannerConfig = {
	file: join(__dirname, 'LICENSE.txt'),
};

export default [

	{
		input: 'src/utils.js',
		output: {
			file: 'dist/utils.js',
			format: 'cjs',
			exports: 'named',
		},
		plugins: [
			resolve(),
			banner(bannerConfig),
		],
	},

	{
		input: 'src/utils.js',
		output: {
			file: 'dist/utils.esm.js',
			format: 'esm',
		},
		plugins: [
			resolve(),
			banner(bannerConfig),
		],
	},
	{
		input: 'src/utils.js',
		output: {
			file: 'dist/utils.esm.min.js',
			format: 'esm',
		},
		plugins: [
			resolve(),
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
	},

	{
		input: 'src/utils.js',
		output: {
			file: 'dist/utils.browser.js',
			format: 'umd',
			exports: 'named',
			name: 'TwippedUtils',
		},
		plugins: [
			resolve(),
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
	},
];
