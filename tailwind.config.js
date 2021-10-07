module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				skill_mine: {
					light: '#232F3E',
					DEFAULT: '#6937FF',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
