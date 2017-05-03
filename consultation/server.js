const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const serverD = 'http://192.168.100.133:8787';
new WebpackDevServer(webpack(config), {
  contentBase: `${__dirname}/static/`,
  hot: true,
  inline: true,
  proxy: {
    '/api': {
      target: serverD,
      changeOrigin: true,
    },
    '/upload': {
      target: serverD,
      changeOrigin: true,
    },
    '/newToken': {
      target: serverD,
      changeOrigin: true,
    },
  }
})
  .listen(8811,"0.0.0.0",function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:8811');
  });