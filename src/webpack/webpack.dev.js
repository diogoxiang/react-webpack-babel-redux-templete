import path from 'path'
import webpack from 'webpack'
import {projectFolder, devServerAddress, devServerPoint, devServerUrl} from '../../config'
export default {
  entry: [
    'webpack-dev-server/client?' + devServerUrl,  // 指明HMR的server地址
    'webpack/hot/only-dev-server',  //引入HMR插件依赖
    './src/app/app.js'  // webpack的web app入口
  ],
  output: {
    path: path.join(projectFolder, 'dist'),
    filename: 'bundle.js',  // 静态资源bundle.js名称
    publicPath: devServerUrl + '/assets/' // 静态资源bundle.js的存放地点
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()  // 打开Webpack的HMR插件
  ],
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
