/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
				Rubik: ['Rubik', 'sans-serif']
			},
			colors: {
				where: '#bd3f3d',
				waldo: '#00a1e1'
			}
		}
	},
	plugins: []
};
