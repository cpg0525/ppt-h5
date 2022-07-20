
import loadingComponent from './index.vue';
const Loading = {};
Loading.install = (Vue) => {
  const LoadingConstructor = Vue.extend(loadingComponent);
  const instance = new LoadingConstructor();
  instance.$mount();
  document.body.appendChild(instance.$el);
  Vue.prototype.$loading = {
    show: function(text = '加载中', isShowBg = true) {
      instance.isShow =  true;
      instance.isShowBg = isShowBg;
      instance.text = text;
    },
    hide: function() {
      instance.isShow =  false;
    }
  }
};

export default Loading;
