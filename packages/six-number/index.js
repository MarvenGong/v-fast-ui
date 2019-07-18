import SixNumber from './src/index.vue';
SixNumber.install = function(Vue) {
  Vue.component('six-number', SixNumber);
}
export default SixNumber;