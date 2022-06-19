// Import path for resolving file paths
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: [path.join(__dirname, 'dist/src/index.js')],
  // Specify the output file containing our bundled code
  output: {
    path: path.join(__dirname, 'dist/bundle'),
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.m?js/,
      resolve: {
        fullySpecified: false
      }
    }]
  },
  target: 'node14',
  devtool: 'source-map',
  mode: 'development',
  externals: ['aws-sdk', {
    ['@aws-sdk/client-dynamodb']: {
      root: '@aws-sdk/client-dynamodb'
    },
    ['@aws-sdk/lib-dynamodb']: {
      root: '@aws-sdk/lib-dynamodb'
    }
  }],
};
