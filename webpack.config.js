const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ],

  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
}