/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme')
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    highlight: (value) => ({
                        boxShadow: `inset 0 1px 0 0 ${value}`,
                    }),
                },
                {
                    values: flattenColorPalette(theme('backgroundColor')),
                    type: 'color',
                }
            )
        },
    ],
}
