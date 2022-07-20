const path = require('path');

module.exports = app => {
  const config = exports = {
    configFile: 'config.test.js'
  };

  // test 配置
  // 接口地址
  config.apiBaseUrl = 'https://test1.ppt.com';

  // 接口签名
  config.apiSign = {
    ak: 'B99B1D1335C14D8B8975F2924E03C710',
    sk: 'DA44C8AFAF7B4924BD857A32409CC591',
    version: '1.0.0',
  };

  /** 日志配置 */
  config.logger = {
    dir: '/usr/local/logs',
  };

  config.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
  };

  return exports;
};