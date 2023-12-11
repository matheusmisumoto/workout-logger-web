import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'brand': '#3498DB',
      'primary': '#0A84FF',
      'secondary': '#0e3650',
      'modal': '#0F3A57',
      'mobile-nav': '#121212',
      'card': '#333333',
      'destructive': '#F40009'
    }
  },
  plugins: [],
}
export default config
