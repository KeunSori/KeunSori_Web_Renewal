import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFC927',
          'yellow-light': '#FFE493',
          gray: '#808080',
          'gray-dark': '#505050',
          'gray-light': '#A0A0A0',
        },
        surface: {
          'gray-light': '#F1F1F1',
        },
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        full: '9999px',
      },
    },
  },
  plugins: [],
} satisfies Config;
