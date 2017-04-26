var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/static/',
  hot: true,
  inline: true,
  proxy: {
    "/api": {
      target: "http://192.168.100.133:8787",
      changeOrigin: true,
    },
    "/upload": {
      target: "http://192.168.100.133:8787",
      changeOrigin: true,
    },
    "/newToken": {
      target: "http://192.168.100.133:8787",
      changeOrigin: true,
    },
  }
})
  .listen(8811, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:8811');
  });
