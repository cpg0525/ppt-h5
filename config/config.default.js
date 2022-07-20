'use strict';

const path = require('path');
const fs = require('fs');

module.exports = app => {
  const config = exports = {};

  config.keys = app.name + '_1560136051904_8091';

  function getFileContent(name) {
    return fs.readFileSync(path.join(app.baseDir, 'app/web/asset/siteFile', name));
  }

  config.siteFile = {
    '/favicon.ico': getFileContent('favicon.png'),
    '/logo.png': getFileContent('logo.png'),
  };

  config.view = {
    // defaultViewEngine: 'nunjucks',
    root: [
      path.join(app.baseDir, 'app/view'),
    ].join(','),
    mapping: {
      '.tpl': 'nunjucks',
      '.html': 'nunjucks'
    }
  };

  config.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  config.logger = {
    consoleLevel: 'DEBUG',
    level: 'DEBUG',
    dir: path.join(app.baseDir, 'logs'),
    appLogName: `${app.name.toLowerCase()}.log`,
    coreLogName: `${app.name.toLowerCase()}.core.log`,
    agentLogName: `${app.name.toLowerCase()}.agent.log`,
    errorLogName: `${app.name.toLowerCase()}.error.log`,
  };

  /** 日志分割 */
  config.logrotator = {
    filesRotateByHour: [], // list of files that will be rotated by hour
    filesRotateBySize: [], // list of files that will be rotated by size
    maxFileSize: 50 * 1024 * 1024, // Max file size to judge if any file need rotate
    maxFiles: 10, // pieces rotate by size
    rotateDuration: 60000, // time interval to judge if any file need rotate
    maxDays: 10, // keep max days log files, default is `31`. Set `0` to keep all logs
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  config.middleware = [
    'http',
    'ua',
    'locals',
    'access',
    'historyFallback',
    'api',
    'notfoundHandler',
  ];

  config.security = {
    csrf: {
      // enable: false,
      ignoreJSON: false,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken',
      headerName: 'x-csrf-token',
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
      ignore: ctx => {
        // console.log('ctx.path', ctx.originalUrl, ctx.originalUrl.indexOf('/mgt'));
        return ctx.originalUrl.indexOf('/mgt') ? false : true;
      }
    },
    xframe: {
      enable: false,
    },
    domainWhiteList: [ '*.abite.com' ],
  };

  exports.httpProxy = {
    '/mgt': {
      target: 'https://open.weixin.cn',
      changeOrigin: true,
      secure: false,
      pathRewrite: {'^/mgt' : ''}
    }
  };

  return config;
};
