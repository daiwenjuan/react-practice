/**
 *  Created by daiwenjuan on 17/9/21 下午5:23.
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PORT = 1234

module.exports = {
  entry: {
    js: './app/client.js',
    /* vendor :把一些第三方的库打包到wendor.js文件中*/
    vendor: [
      'react', 'classnames', 'react-router', 'react-dom',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[name].js',
  },
  resolve: {
    /*自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名*/
    extensions: ['', '.js', '.json'],
    /**
     * 模块别名定义，方便后续直接引用别名，无须多写长长的地址 例如：后续直接 require('components') 即可
     */
    alias: {
      components: __dirname + '/app/components',
      actions: __dirname + '/app/actions',
      api: __dirname + '/app/api',
      reducers: __dirname + '/app/reducers',
      utils: __dirname + '/app/utils',
      constants: __dirname + '/app/constants',
      controllers: __dirname + '/app/controllers',
      style: __dirname + '/app/style',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap=true!postcss-loader?sourceMap=true!less-loader?sourceMap=<true></true>'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'file-loader?name=iconfont/[path][name].[ext]',
      },
    ],
  },
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true,
    }),
    // 提取css
    new ExtractTextPlugin('vendor.[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // 入口文件名
      filename: 'vendor.bundle.js', // 打包后的文件名
    }),
    /* 压缩优化代码结束*/
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app/index.html'),
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/`,
    }),
    // 分析代码
    //new BundleAnalyzerPlugin({analyzerPort: 8188}),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './app/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    // proxy: casProxy(),
    host: '0.0.0.0',
    port: PORT,
  },
}