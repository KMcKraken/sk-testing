import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	onwarn: (warning, handler) => {
		if (warning.code === "unused-export-let" || "css-unused-selector") {
		  return;
		}
		handler(warning);
	},
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$comp: 'src/lib/components',
			$styles: 'src/lib/styles',
			$api: 'src/lib/api',
			$utils: 'src/lib/utils',
		}
	}
};

export default config;
