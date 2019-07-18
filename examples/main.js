import Vue from 'vue'
import App from './App.vue'
import FastUi from '../packages';
import '../packages/style.css';
Vue.config.productionTip = false
Vue.use(FastUi);
new Vue({
  render: h => h(App),
}).$mount('#app')
