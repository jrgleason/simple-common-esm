const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src/index.mjs'),
  output: {
      filename: 'sce.cjs',
      libraryTarget: 'commonjs'
  },
  module: {
      rules: [
          {
              test: /\.mjs$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          }
      ]
  }
}