import Layout from 'component/layout/index';
import plugin from 'framework/plugin';
import Modal from 'component/modal/index';
import Toast from 'component/toast/index';
import Loading from 'component/loading/index';
import Share from 'component/share/index';
import '@/utils/common/water-mask';
// vue-entry-loader 自定义全局注册钩子，如果在该目录下面存在该 template.js 框架自动加载，用于注册全局的组件
export default function (Vue) {
  Vue.use(plugin);
  Vue.use(Modal);
  Vue.use(Toast);
  Vue.use(Loading);
  Vue.use(Share);
  Vue.component(Layout.name, Layout);
}
