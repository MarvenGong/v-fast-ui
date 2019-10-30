import Toast from './toast';
import Indicator from './indicator';
import SixNumber from './six-number';
import ScrollWord from './scroll-word';
import './style.css';
const components = [
  SixNumber,
  ScrollWord
];
const install = function (Vue) {
  if (install.installed) return
  install.installed = true;
  // eslint-disable-next-line no-console
  console.info('v-fast-ui注册成功');
  Vue.prototype.$toast = Toast;
  Vue.prototype.$indicator = Indicator;
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install;
export {
  Toast,
  Indicator,
}