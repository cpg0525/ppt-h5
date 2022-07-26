'use strict';
// import axios from 'axios';
import request from 'framework/request';
import VueI18n from 'vue-i18n';
import createI18n from 'framework/i18n/site';
import 'ant-design-vue/dist/antd.css';
export default {
  install(Vue) {
    if (!Vue.prototype.hasOwnProperty('$request')) {
      Vue.prototype.$request = request;
    }
    // 自定义 hook 钩子，vue-entry-loader 自动加载
    if (!Vue.hook) {
      Vue.use(VueI18n);
      Vue.hook = {
        render(context, options) {
          const i18n = createI18n(context.state.locale);
          options.i18n = i18n;
        }
      };
    }
  }
};