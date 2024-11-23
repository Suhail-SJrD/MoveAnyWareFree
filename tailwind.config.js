/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", './node_modules/aceternity-ui/**/*.js'],
  theme: {
    extend: {
      screens: {
        // Custom height-based media query for a minimum height of 415px
        'max-h-415': { 'raw': '(max-height: 415px)' },
      },
      colors: {
        brandCol: '#042959',
        hoverColor: '#D1AF77',
        hoverLighColor: '#EFE3D0',
        selectType: '#1A1A1A',
        lable: '#D4B183',
        error: '#d4c583',
        primary: '#1DA1F2',
      },
      screens: {
        '344': '344px',
        '375': '375px',
        '500': '500px',
        '380': '380px',
        '360': '360px',
        '400': '400px',
        '768': '768px',
        '800': '800px',
        '1000': '1000px',
        '1024': '1024px',
        '1025': '1025px',
        '1200': '1200px',
        '1367': '1367px',
        '700': '700px',
        '900': '900px',
        '1487': '1487px',
        '540': '540px',
        '650': '650px',
        '600': '600px',
        '1150': '1150px',
        '370': '370px',

        // Custom height-based media query for 415px height
        'h-415': { 'raw': '(max-height: 415px)' }, // Custom height-based breakpoint
      },
    },
  },
  plugins: [],
}
