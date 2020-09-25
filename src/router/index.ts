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
    meta: {
      title: '情クラ！ - Minecraftサーバ管理システム',
    },
    component: Home,
  },
  {
    path: '/about',
    redirect: '/maintenance',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
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
