import {mangle as minifyIds} from './mangle';

/**
 * Minifies the given GLSL source code.
 *
 * Based on https://github.com/vwochnik/rollup-plugin-glsl
 *
 * @param source The source code.
 * @return The minified code.
 */

export function minifyShader(source: string, mangle: boolean): string {
	const src = mangle ? minifyIds(source) : source;
	return src
		.replace(/\/\/.*/g, '') // Single line comments
		.replace(/\/\*+\s+(.|\n)*?\*\//gm, '') // Multi line comments
		.replace(/^\s+/gm, '') // Spaces at the beginning of the file
		.replace(/ +/gm, ' ') // Multiple spaces in a row;
		.replace(/\n+/gm, '\n'); // New lines;
}

