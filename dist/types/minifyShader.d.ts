/**
 * Minifies the given GLSL source code.
 *
 * Based on https://github.com/vwochnik/rollup-plugin-glsl
 *
 * @param source The source code.
 * @return The minified code.
 */
export declare function minifyShader(source: string, mangle: boolean): string;
