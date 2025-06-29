/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'paper-bg': '#fcfcfa',
				'paper-bg-alt': '#f7f7f2',
				'paper-border': '#e5e5e5',
				accent: '#2250f4',
				'accent-dark': '#1a3db8',
				'text-main': '#1a1a1a',
				'text-secondary': '#5c5c5c',
				'code-bg': '#f5ecd7',
				'blockquote-bg': '#f9f3e2',
			},
		},
			darkMode: 'media',
			colors: {
				'dark-paper-bg': '#1a1a1a',
				'dark-paper-bg-alt': '#242424',
				'dark-paper-border': '#3a3a3a',
				'dark-accent': '#527dff',
				'dark-accent-dark': '#3e63d1',
				'dark-text-main': '#f2f2f2',
				'dark-text-secondary': '#a3a3a3',
				'dark-code-bg': '#232325',
				'dark-blockquote-bg': '#232325',
			},
		},
	},
	plugins: [],
}