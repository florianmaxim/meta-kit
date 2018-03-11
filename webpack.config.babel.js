const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    app:path.join(__dirname, '/src/public')
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/lib/public')
  },

  module: {

    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },

  plugins: [

      new htmlWebpackPlugin({
        title: 'Meta.js - The (Virtual) Space Library',
        favicon: path.join(__dirname, '/src/public/static/images/favicon.ico')
      })
    ,

      new copyWebpackPlugin([{
        from: path.join(__dirname, '/src/public/static'),
        to: path.join(__dirname, '/lib/public/static')
      }])

  ]

}
