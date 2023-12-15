/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        buttonGradient: 'linear-gradient(180deg, #C72725 0%, #852D2D 69.27%, #763433 100%)',
        cardGradientBg: 'linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #484051',
        blueBoxGradient: 'linear-gradient(180deg, #1388AB 0%, #1E5492 100%)',
        redBoxGradient: 'linear-gradient(180deg, #F3782C 0%, #C8286A 69.27%, #832D70 100%)'
      },
      colors: {
        Blue: '#1388AB',
        primaryBg: '#1C1328',
        cardBg: '#332B3E',
        priceColor: '#79e75e'
      },
      maxWidth: {
        designSize: '1440px',
        featuresWidth: '820px'
      },
      padding: {
        100: '100px'
      }
    }
  },
  plugins: []
};
