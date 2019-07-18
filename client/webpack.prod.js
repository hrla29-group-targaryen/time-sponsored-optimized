const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
    threshold: 8192,
    minRatio: 0.8
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
})


