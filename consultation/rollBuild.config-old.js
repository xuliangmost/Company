var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');//css合并抽离
module.exports = {
  entry: [
    __dirname + '/src/routes/output.js',//要编译的js文件
  ],
  // 出口
  output: {
    path: __dirname + '/static/lib',
    filename: "index.js",
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ET({
      filename: 'index.css',
      allChunks: true
    })
  ],

};
