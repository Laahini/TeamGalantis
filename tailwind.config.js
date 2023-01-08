/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: 
  {
    extend: {},
  },
  plugins: 
  [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    require('daisyui'),
  ],
  prefix: "tw-",
  daisyui:
  {
    themes: [
      {
        mytheme: 
        {
          "primary": "#d1d5db",
          "secondary": "#111827",
          "accent": "#fef3c7",
          "neutral": "#f3f4f6",
          "base-100": "#f3f4f6",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
    prefix: "daisy-",
  }
}
