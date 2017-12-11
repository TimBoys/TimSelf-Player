const buble = require('rollup-plugin-buble')

module.exports = {
  input: 'src/plugins/logger.js',
  output: {
    file: 'cc-client/logger.js',
    format: 'umd',
    name: 'createVuexLogger',
  },
  plugins: [buble()]
}
