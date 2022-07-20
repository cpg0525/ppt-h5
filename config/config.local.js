const path = require('path');
const ip = require('ip');
module.exports = app => {
  const exports = {
    configFile: 'config.local.js',

    // 接口地址 test1
    apiBaseUrl: 'https://test1.ppt.com',
    apiSign: {
      ak: 'B99B1D1335C14D8B8975F2924E03C710',
      sk: 'DA44C8AFAF7B4924BD857A32409CC591',
      version: '1.0.0',
    },
  };

  exports.view = {
    cache: false
  };

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: [], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config/manifest.json'] // 指定过滤的目录（包括子目录）
  };

  exports.logview = {
    dir: path.join(app.baseDir, 'logs'),
  };

  exports.vuessr = {
    injectCss: true,
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
  };

  exports.webpack = {
    browser: true,
    webpackConfigList: require('easywebpack-vue').getWebpackConfig()
  };

  // const localIP = ip.address();
  // const domainWhiteList = [];
  // [7001, 9000, 9001].forEach(port => {
  //   domainWhiteList.push(`http://localhost:${port}`);
  //   domainWhiteList.push(`http://127.0.0.1:${port}`);
  //   domainWhiteList.push(`http://${localIP}:${port}`);
  // });

  // exports.security = {
  //   domainWhiteList
  // };

  return exports;
};