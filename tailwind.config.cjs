/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"sans": ["Fira Sans", "system-ui", "sans-serif"],
			"mono": ["Fira Code", "monospace"],
		},
		extend: {},
	},
	darkMode: "class",
	plugins: [
		require('@tailwindcss/line-clamp'),
	],
}
