/** @type {import('tailwindcss').Config} */

import { addIconSelectors } from '@iconify/tailwind';
import  colors from 'tailwindcss/colors'

export default {
  content: ["_site/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.slate,
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    addIconSelectors(['lucide', 'simple-icons']),
  ],
}

