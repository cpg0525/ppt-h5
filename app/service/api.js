'usestrict';

const egg = require('egg');
const api = require('../api');

module.exports = class ApiService extends egg.Service {
  async activityDetail(query) {
    try {
      return await this.ctx.apiPost(api.ACTIVITY_DETAIL, {
        ...query,
      });
    } catch (e) {
      throw e;
    }
  }

  async activityParticiantDetail(query) {
    try {
      return await this.ctx.apiPost(api.ACTIVITY_PARTICIPANT_DETAIL, {
        ...query,
      });
    } catch (e) {
      throw e;
    }
  }
};