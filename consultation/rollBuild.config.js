var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ET = require('extract-text-webpack-plugin');//css合并抽离
module.exports = {
  /*entry: [
    __dirname + '/src/routes/output.js',//要编译的js文件
  ],*/
  entry:
    {
      'main':'./src/routes/output.js'
    },
  // 出口
  output: {
    path: __dirname + '/static/lib',
    filename: '[name].[chunkhash].js',
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname+'/static/lib',
      template:__dirname+'/static/index.html',
      inject:'body',
      hash:true,
      chunks:['main','common.js']   // 这个模板对应上面那个节点
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ET({
      filename: 'index.css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],

};
