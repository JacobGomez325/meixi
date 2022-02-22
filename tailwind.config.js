module.exports = {
  theme: {    
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary:"#4299e1"
      },
    },
  },
  variants: {},
  purge: {
    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
    ],
  },
  plugins: [
   
  ],
}
