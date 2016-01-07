import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import WebpackDevConfig from './webpack/webpack.dev'
import {devServerAddress, devServerPoint} from '../config'

new WebpackDevServer(webpack(WebpackDevConfig), {
  publicPath: '/assets/',
  hot: true,
  historyApiFallback: true
}).listen(devServerPoint, devServerAddress, (err, result) => {
  if (err) {
    console.log(err)
  }
  console.log('Listening at localhost:3000')
})
