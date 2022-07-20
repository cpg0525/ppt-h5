const path = require('path');

module.exports = app => {
  const config = exports = {
    configFile: 'config.pre.js'
  };
  // 接口地址
  config.apiBaseUrl = 'https://pre.ppt.com';

  // 接口签名
  config.apiSign = {
    ak: '2EFB3C0930BB4BE382A0B6E0F2E0F85B',
    sk: '276B28B8536D4ABBAEBBF8002A2F7607',
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