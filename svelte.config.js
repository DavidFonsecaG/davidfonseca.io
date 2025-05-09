import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/davidfonseca.dev'
    },
    prerender: {
      entries: ['*'] // this replaces `default: true`
    }
  },
  preprocess: vitePreprocess()
};

export default config;
