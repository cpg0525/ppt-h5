class AppAbite {
  constructor(app) {
  }
  async didReady() {
    // 应用已经启动完毕
  }
  async serverDidReady() {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例
    // console.log('serverDidReady', this);
  }
}

module.exports = AppAbite;