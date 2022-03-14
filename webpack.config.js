// Import path for resolving file paths
const path = require('path');
module.exports = {
  entry: [path.join(__dirname, 'dist/src/index.js')],
  // Specify the output file containing our bundled code
  output: {
    path: path.join(__dirname, 'dist/bundle'),
    filename: 'index.js',
  },
  target: 'node14',
  devtool: 'source-map',
  mode: 'development',
  externals: {
    'aws-sdk': 'require("aws-sdk")',
  },
  module: {},
};
