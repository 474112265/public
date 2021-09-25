import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from '@/request/index.js';
import vueLazyLoad from 'vue-lazyLoad'


Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueLazyLoad)


import './components/global/index'
// Vue.component('helloVue',{render(){return <p>hello Vue2.0</p>}})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
