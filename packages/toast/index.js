import Toast from './src/toast';
Toast.install = function(Vue) {
  Vue.prototype.$toast = Toast;
}
export default Toast;
