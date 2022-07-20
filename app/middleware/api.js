module.exports = () => {
  return async function (ctx, next) {
    ctx.api = {
      async post(path, params = {}) {
        try {
          return ctx.apiPost(path, params);
        } catch (e) {
          throw e;
        }
      },
      async get(path, params = {}) {
        try {
          return ctx.apiGet(path, params);
        } catch (e) {
          throw e;
        }
      },
    };
    await next();
  };
};