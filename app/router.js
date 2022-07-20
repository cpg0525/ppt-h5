'use strict';

module.exports = app => {
  const {
    router,
    controller
  } = app;
  // 首页
  router.get('/', controller.home.index);

  // 接口代理
  router.post('/ppt-capi/**', controller.api.apiPost);

  // 健康检查
  router.get('/**(/?)healthCheck(.?)*', controller.home.healthCheck);

};