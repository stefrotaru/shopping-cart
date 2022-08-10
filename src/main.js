import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

import { store } from './store/store.js';

const router = new VueRouter({
  linkExactActiveClass: 'is-active',
  routes,
  mode: 'history',
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})
