import type { Plugin } from 'esbuild';
/**
 * GLSL plugin options.
 */
export declare type GLSLOptions = {
    minify?: boolean;
    mangle?: boolean;
};
/**
 * An options wrapper function that returns the GLSL plugin.
 *
 * @param options The options.
 * @return The plugin.
 */
declare function glsl({ minify, mangle }?: GLSLOptions): Plugin;
export { glsl, glsl as default };
