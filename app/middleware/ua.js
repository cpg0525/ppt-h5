const parser = require('ua-parser-js');

module.exports = () => {
  return async function (ctx, next) {
    const ua = parser(ctx.get('user-agent'))
    ctx.UA = {
      ...ua,
      isTablet: ua.device.type === 'tablet',
      isMobile: ua.device.type === 'mobile',
      isIOS: ua.os.name === 'iOS',
      isAndroid: ua.os.name === 'Android'
    }
    await next();
  };
};