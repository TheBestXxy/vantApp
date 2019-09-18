import Vue from 'vue';
import VueRouter from 'vue-router';

import demo from '@/views/demo.vue';
import index from '@/views/index.vue';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/demo',
    }, {
        path: '/demo',
        component: demo,
    }, {
        path: '/index',
        component: index,
    }]
})