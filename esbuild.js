import {createRequire} from 'module';
import esbuild from 'esbuild';

const require = createRequire(import.meta.url);
const pkg = require('./package');
const date = (new Date()).toDateString();

const name = pkg.name.split('/').pop();
const banner = `/**
 * ${name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * @license ${pkg.license}
 */`;

await esbuild.build({
	entryPoints: ['src/index.ts'],
	outfile: `dist/${name}.js`,
	banner: {js: banner},
	platform: 'node',
	logLevel: 'info',
	format: 'esm',
	bundle: true,
	minify: true,
}).catch(() => process.exit(1));

await esbuild.build({
	entryPoints: ['src/index.ts'],
	outfile: `dist/${name}.cjs`,
	banner: {js: banner},
	platform: 'node',
	logLevel: 'info',
	format: 'cjs',
	bundle: true,
	minify: true,
}).catch(() => process.exit(1));
