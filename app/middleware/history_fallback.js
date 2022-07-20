module.exports = () => {
  return async function (ctx, next) {
    await next();
    // console.log('ctx');
    // console.log(ctx.status);
    // console.log(ctx.body);
    // console.log(ctx.url);
    if (ctx.status === 404 && !ctx.body && ctx.url.startsWith('/app/')) {
      await ctx.render('index.html');
    }
  };
};