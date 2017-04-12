var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');//css合并抽离
module.exports = {
  // 入口
  entry: [
     'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
     'webpack/hot/only-dev-server',
    __dirname + '/src/routes/output.js',//要编译的js文件
  ],
  // 出口
  output: {
    path: __dirname + '/static/lib',
    filename: "index.js",
  },
  // sourcemap
   devtool: 'source-map',
  // 配置模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ET.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.scss$/,
        loader: ET.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      },
      {
        test: /\.less$/,
        loader: ET.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        loader: 'url?limit=4000'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),//js压缩
    /*new webpack.optimize.UglifyJsPlugin({
      comments: false,        //去掉注释
      compress: {
        warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
      }
    }),*/
    new ET({
      filename: 'index.css',  //样式单独合并
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),//代码热替换

    new webpack.NoEmitOnErrorsPlugin(),//允许错误不打断程序
    // new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
  ],

};
