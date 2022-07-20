'use strict';
const egg = require('egg');
module.exports = class ApiController extends egg.Controller {

  async apiPost() {
    const body = this.ctx.request.body;
    const apiMethods = body.apiMethods;
    const url = this.ctx.request.url;
    console.log(url, body.data);
    if(apiMethods.toLocaleLowerCase()=='get') {
      try {
        this.ctx.body = await this.ctx.api.get(url, body.data);
      } catch (e) {
        this.ctx.body = e;
      }
    } else {
      try {
        this.ctx.body = await this.ctx.apiPost(url, body.data);
      } catch (e) {
        this.ctx.body = e;
      }
    }
  }
};