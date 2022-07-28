module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['iOS >= 9', 'Android >= 4.4']
    }),
    require('postcss-px-to-viewport')({
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 750, // UI设计稿的宽度
      viewportHeight: 1448, // UI设计稿的高度
      unitPrecision: 8, // 转换后的精度，即小数点位数
      viewportUnit: 'rem', // 指定需要转换成的视窗单位，默认vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类名，
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      landscape: false, // 是否处理横屏情况
      // include: /\/app\/web\/page\/h5$/,
      exclude: [/\/app\/web\/component\//, /\/app\/web\/page\/pc\/*/, /\/app\/web\/asset\/css\//, /node_modules\/ant-design-vue\/dist\/antd.css/],
    })
  ]
};