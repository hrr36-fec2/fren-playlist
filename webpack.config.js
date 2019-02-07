const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/Playlist_Service.js',
  module: {
    rule: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};