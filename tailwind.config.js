/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			colors: {
				main: 'var(--main)',
				overlay: 'var(--overlay)',
				bg: 'var(--bg)',
				bw: 'var(--bw)',
				blank: 'var(--blank)',
				text: 'var(--text)',
				mtext: 'var(--mtext)',
				border: 'var(--border)',
				ring: 'var(--ring)',
				ringOffset: 'var(--ring-offset)',

				secondaryBlack: '#212121',
			},
			borderRadius: {
				base: '2px',
			},
			boxShadow: {
				shadow: 'var(--shadow)',
			},
			translate: {
				boxShadowX: '0px',
				boxShadowY: '4px',
				reverseBoxShadowX: '0px',
				reverseBoxShadowY: '-4px',
			},
			fontWeight: {
				base: '500',
				heading: '700',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
