/** @type {import('tailwindcss').Config} */
/** icon docs https://iconify.design/docs/usage/css/tailwind/iconify/  */

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
    require('@tailwindcss/container-queries'),
    addIconSelectors(['lucide', 'simple-icons']),
  ],
}

