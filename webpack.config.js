var path = require('path');
var webpack = require("webpack");

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/components/main/index.js')
  ],
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: { presets:['es2015', 'react'] } },
      { test: /\.scss$/, loader: 'style!css!sass!autoprefixer-loader?{browsers:["Safari >= 7"]}'},
      { test: /\.(ttf|otf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=[name]_[hash].[ext]" }
    ]
  }
};

module.exports = config;