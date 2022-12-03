/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pink: {
					DEFAULT: '#F5A9B8'
					light: '',
				},
				blue: {
					DEFAULT: '#5BCEFA',
					light: '#CAEAFB'
				},
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
