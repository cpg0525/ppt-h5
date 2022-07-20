module.exports = () => {
  return async function (ctx, next) {
    ctx.http = {
      get(url, params, headers = {}) {
        return ctx.httpGet(url, params, headers);
      },
      post(url, params, headers = {}) {
        return ctx.httpPost(url, params, headers);
      },
    };
    await next();
  };
};