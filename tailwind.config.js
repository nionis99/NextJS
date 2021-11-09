module.exports = {
  mode: 'jit',
  purge: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F65261',
        content: '#232323',
        footer: '#424242',
        gray68: 'rgba(96, 96, 96, 0.68)',
        gray80: 'rgba(50, 50, 50, 0.8)',
      },
      height: {
        17.5: '4.375rem',
      },
      backgroundImage: {
        header: "url('../../public/images/header.png')",
        landing: "url('../../public/images/landing.png')",
      },
      boxShadow: {
        modal:
          '0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.07), 0px 10px 20px rgba(0, 0, 0, 0.05),' +
          ' 0px 10px 50px rgba(0, 0, 0, 0.05)',
        none: 'none',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
