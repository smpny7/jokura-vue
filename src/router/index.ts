import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/maintenance',
    name: 'Home',
    component: Home,
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    meta: {
      title: 'メンテナンス中',
    },
    component: () => import('../views/Maintenance.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'ログイン',
    },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '*',
    meta: {
      title: 'お探しのページは見つかりませんでした',
    },
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
