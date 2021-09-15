const mode = process.env.TAILWIND_MODE ? 'jit' : 'aot';

module.exports = {
  mode,
  purge: {
    content: ['./apps/**/*.{html,ts,css,scss}', './libs/**/*.{html,ts,css,scss}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
