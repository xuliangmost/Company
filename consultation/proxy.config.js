// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义
/*'/restadmin/!*':'http://192.168.100.133:8787',*/
module.exports = {
  '/api/*':'http://192.168.100.133:8787',
  '/upload/*':'http://192.168.100.133:8787',
  '/conferenceRoom/*':'http://192.168.100.133:8787'

};
