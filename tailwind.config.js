module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'diatomic-nonmetal': '#5FAB17',
        'noble-gas': '#28CAE3',
        'alkali-metal': '#EE341B',
        'alkaline-earth-metal': '#FC802A',
        'metalloid': '#B17723',
        'polyatomic-nonmetal': '#23E58F',
        'transition-metal': '#1974C3',
        'post-transition-metal': '#3E5F7E',
        'lanthanide': '#7147CD',
        'actinide': '#CC47A0',
        'unknown': '#9E9D9B',
       }),
        spacing: {
          '100': '100rem',
          '120': '120rem',
          '140': '140rem',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
