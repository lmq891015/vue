import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/style.scss";

Vue.config.productionTip = false;
Vue.use(ElementUI);
window.Vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
