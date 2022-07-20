module.exports = () => {
  return async function (ctx, next) {
    ctx.locals.locale = ctx.query.locale || 'cn';
    ctx.locals.origin = ctx.request.origin;
    await next();
  };
};