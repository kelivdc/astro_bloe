/** @type {import('tailwindcss').Config} */
// https://colorhunt.co/palette/3a98b9fff1dce8d5c4eeeeee
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito','sans-serif'],
			},
			colors: {
				colorA: '#3A98B9',
				colorB: '#FFF1DC',
				colorC: '#E8D5C4',
				colorD: '#EEEEEE'
			}
		},
		
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	],
}
