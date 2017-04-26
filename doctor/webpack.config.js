var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');//css合并抽离
module.exports = {
  // 入口
  entry: [
    __dirname + '/src/routes/output.js',//要编译的js文件
  ],
  output: {
    path: __dirname + '/static/lib',
    filename: "index.js",
  },
  devtool: 'source-map',
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
        loader: 'url-loader?limit=2000'
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
    new ET({
      filename: 'index.css',  //样式单独合并
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),//代码热替换

    new webpack.NoEmitOnErrorsPlugin(),//允许错误不打断程序
    // new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
  ],

};
