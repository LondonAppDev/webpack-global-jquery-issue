const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    'main': './src/main.js',
    'app': './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {loader: 'babel-loader', query: {presets: ['es2015']}}
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  mode: 'development',
}
