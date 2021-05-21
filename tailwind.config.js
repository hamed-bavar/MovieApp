module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{module.css,js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    boxShadow: {
      sm: '0px 3px 15px 1px rgba(254,254,254,0.1)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    blue:{
      'sm':'1px'
    },
    screens: {
      'sm': '590px',
      // 'md': '768px',
      'md':'650px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
     extend: {
        height:{
        '96': '30rem',
        },
       colors:{
          purple:{
            DEFAULT: '#2D283E',
            dark: '#2D283E',
            light:'#802BB1'
          },
          gray:{
            DEFAULT: '#D1D7E0',
            dark: '#161a1a',
            light:'#D1D7E0',
            between:'#564F6F'
          }
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }