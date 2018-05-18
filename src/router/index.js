import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 登录
const login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login')

// home
const layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'layout')

// 模型管理
const model = r => require.ensure([], () => r(require('@/views/business/model/index.vue')), 'model')

// 资源管理
const  resource = r => require.ensure([], () => r(require('@/views/business/resource/index.vue')), 'resource')

// 视图管理
const  view = r => require.ensure([], () => r(require('@/views/business/view/index.vue')), 'view')

const router = new VueRouter({
  routes: [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '',
        component: layout,
        children: [
            {
                path: '/model',
                component: model,
                name: '模型管理'
            },
            {
                path: '/resource',
                component: resource,
                name: '资源管理'
            },
            {
                path: '/view',
                component: view,
                name: '视图管理'
            }
        ]
    },
  ]
});

import store from '@/store/index';
import menuList from "@/utils/menu/menu.js";

export default router