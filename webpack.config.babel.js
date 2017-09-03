import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {

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
      }
    ]
  },

  plugins: [new htmlWebpackPlugin({
    title: 'space'
  })]

}
