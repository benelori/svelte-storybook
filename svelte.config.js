import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

const config = {
	preprocess: preprocess(
		{
			defaults: {
				style: 'postcss',
			},
			postcss: true,
		}
	),

	kit: {
		adapter: adapter(),
		target: '#svelte',
	}
}

export default config;
