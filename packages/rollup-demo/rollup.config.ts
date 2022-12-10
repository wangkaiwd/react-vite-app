import {defineConfig} from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
	input: ['./index.ts'],
	output: {
		file: 'dist/index.js',
		format: 'es'
	},
	plugins: [
		typescript()
	]
});
