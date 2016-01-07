var path = require('path');
var webpack = require('webpack');
var webpackOutput = {
  entry: [
    './src/app/app.js'  // webpack的web app入口
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',  // 静态资源bundle.js名称
    publicPath: '/dist/' // 静态资源bundle.js的存放地点
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ] //自动补全后缀名，即 import test from 'test.jsx' = import test from 'test'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/ }, // 对所有后缀名为jsx的文件，使用react-hot-loader和babel-loader
      { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' }
    ]
  }
}

module.exports = webpackOutput
