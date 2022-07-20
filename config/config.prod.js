const path = require('path');

module.exports = app => {
  const config = exports = {
    configFile: 'config.prod.js'
  };
  
  // 接口地址
  config.apiBaseUrl = 'https://online.ppt.com';
  // 接口签名
  config.apiSign = {
    ak: 'BE1659EF9B884CC4835915978F69D930',
    sk: 'CFCB9769A75F4FDFB896EB1C607E586E',
    version: '1.0.0',
  };

  /** 日志配置 */
  config.logger = {
    dir: '/usr/local/logs',
    consoleLevel: 'INFO', // NONE
    level: 'INFO',
  };

  config.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
  };
  
  return exports;
};