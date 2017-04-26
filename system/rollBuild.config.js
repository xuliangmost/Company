var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');//css合并抽离
var HtmlWebpackPlugin = require('html-webpack-plugin');
let extractCSS = new ET('[name].css');
module.exports = {
  /*entry: [
   __dirname + '/src/routes/output.js',//要编译的js文件
   ],*/
  entry:{
    'main':'./src/routes/output.js'
  },
  // 出口
  output: {
    path: __dirname+'/static/lib',
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname+'/static/lib/index.html',//生成html的路径，名字
      template:__dirname+'/static/index_template.html',//按照哪个html模板渲染
      inject:'body',
      hash:true
    }),//把html打包
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }//切割代码  生成多个js
    }),
    extractCSS
  ],
};
