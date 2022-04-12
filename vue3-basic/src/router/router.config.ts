import type { RouteRecordRaw } from 'vue-router';
import Layout from '../views/layout/index.vue';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      },
      {
        path: '/tsBaseView',
        name: 'TsBaseView',
        component: () => import('../views/TsBaseView.vue'),
        meta: { title: 'ts基础', keepAlive: false, showTab: true }
      }
    ]
  }
];
