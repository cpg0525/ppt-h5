
import ShareComponent from './index.vue';
const Share = {};
Share.install = (Vue) => {
  const ShareConstructor = Vue.extend(ShareComponent);
  const instance = new ShareConstructor();
  instance.$mount();
  document.body.appendChild(instance.$el);
  Vue.prototype.$share = {
    show: function() {
      instance.visible = true;
    },
    hide: function() {
      instance.visible = false;
    }
  }
};

export default Share;