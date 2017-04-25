var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');//css合并抽离
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  /*entry: [
    __dirname + '/src/routes/output.js',//要编译的js文件
  ],*/
  entry:{
    main: './src/routes/output.js'
  },
  // 出口
  output: {
    path: path.resolve(__dirname, './static/output'),
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
    /*new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),*/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }//切割代码  生成多个js
    }),



    new ET({
      filename: 'index.css',
      allChunks: true
    }),


    
    new HtmlWebpackPlugin({
      filename: __dirname+'/static/output/index.html',//生成html的路径，名字
      template:__dirname+'/static/index.html',//按照哪个html模板渲染
      inject:'head',
      hash:true
    })//把html打包

  ],

};
