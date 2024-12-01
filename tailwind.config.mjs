import animations from '@midudev/tailwind-animations'


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': "#FBFBFB",
				'secondary': "#1F1F1F"
			}
		},
	},
	plugins: [animations],
}
