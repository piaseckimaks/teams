module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
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
      textAlign: ['group-hover'],
      stroke: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}