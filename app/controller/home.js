'use strict';

const egg = require('egg');

module.exports = class IndexController extends egg.Controller {
  async healthCheck() {
    this.ctx.body = '<html>node health check success!</html>';
  }

  async index() {
    const query = this.ctx.query;
    try {
      // 获取参与详情
      const res = {title:  this.ctx.__('Email')};
      // const res = await this.ctx.service.api.activityParticiantDetail(query);
      await this.ctx.renderClient('pc/ppt-h5/index.js', {
        seo: {
          title: res.title || '',
        },
        query,
        activityInfo: res,
      });
    } catch (e) {
      this.ctx.status = 404;
    }
  }

  async test() {
    this.ctx.body = {
      NODE_ENV: process.env.NODE_ENV || '',
      EGG_SERVER_ENV: process.env.EGG_SERVER_ENV || '',
      configFile: this.ctx.app.config.configFile,
    };
  }
};
