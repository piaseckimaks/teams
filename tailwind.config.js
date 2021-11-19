module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['active'],
      flex: ['hover'],
      justifyContent: ['hover'],
      itemsAlign: ['hover'],
      translate: ['group-hover'],
      fontSize: ['group-hover'],
      borderRadius: ['hover'],
      zIndex: ['hover'],
      margin: ['group-hover'],
      textAlign: ['group-hover']
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}