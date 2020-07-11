import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
});
