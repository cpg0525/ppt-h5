module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = {
          error: 'Not Found'
        };
      } else {
        if (ctx.UA.isMobile) {
          ctx.body = '<h1>Page Not Found</h1>';
        } else {
          await ctx.renderClient('pc/not-found/index.js', {
            seo: {
              title: '404-我与外界失联了'
            }
          });
        }
      }
    }
  };
};