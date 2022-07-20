'usestrict';

const egg = require('egg');

module.exports = class WxService extends egg.Service {
  async getOpenId(code) {
    const {
      appId,
      appSecret,
    } = this.ctx.app.config.wechat;
    try {
      const res = await this.ctx.http.get('https://api.weixin.qq.com/sns/oauth2/access_token', {
        appid: appId,
        secret: appSecret,
        code,
        grant_type: 'authorization_code',
      });
      if (res.errcode) {
        throw res;
      }
      if (!res.openid) {
        throw {
          msg: '返回[openid]错误！'
        }
      }
      return res.openid;
    } catch (e) {
      throw e;
    }
  }
};