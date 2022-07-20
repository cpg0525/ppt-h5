
import toastComponent from './index.vue';
const Toast = {};
Toast.install = (Vue) => {
  // 第一步：使用基础 Vue 构造器，创建一个“子类”
  const ToastConstructor = Vue.extend(toastComponent);
  // 第二步：创造一个组件实例
  const instance = new ToastConstructor();
  // 第三步：挂载实例
  instance.$mount();
  // 第四步：在body添加组件
  document.body.appendChild(instance.$el);
  let timer = null;

  // 第五步：添加实例方法，以供全局调用
  Vue.prototype.$toast = (msg, duration = 1500) => {
    instance.text = msg;
    instance.showWrap = true,    // 是否显示组件
    instance.showContent =true  // 作用:在隐藏组件之前,显示隐藏动画
    instance.show = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      instance.showContent = false;
    }, duration)
  }
};

export default Toast;

