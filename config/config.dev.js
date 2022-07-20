const path = require('path');

module.exports = app => {
  const config = exports = {
    configFile: 'config.dev.js'
  };
  // 接口地址
  config.apiBaseUrl = 'https://dev.ppt.com';

  // 接口签名
  config.apiSign = {
    ak: '272D21A21F4244179F54107C9700EC30',
    sk: '20E13ECD6782408BBDD7A3E57B5BBCD4',
    version: '1.0.0',
  };

  config.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
  };

  /** 日志配置 */
  config.logger = {
    dir: '/usr/local/logs',
  };

  return exports;
};