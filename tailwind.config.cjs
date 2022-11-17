/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pink: '#F5A9B8',
				blue: '#5BCEFA'
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
