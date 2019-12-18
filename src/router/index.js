import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/components/Layout.vue';
import index from '@/views/index.vue';
Vue.use(VueRouter);

// 获取二级子路由
const files = require.context('@/views', true, /index.js$/)
let configRouters = [];
// console.log(files.keys()) // ["./home.js"] 返回一个数组

files.keys().forEach(key => {
    if (key === './index.js') return
    configRouters = configRouters.concat(files(key).routes) // 读取出文件中的default模块
})

// 获取一级路由
const rootFiles = require.context('@/views', false, /\.vue$/)
let rootRouters = [];

function capitalizeFirstLetter(str) {
    // return str.charAt(0).toUpperCase() + str.slice(1)
    return str;
}

function validateFileName(str) {
    return /^\S+\.vue$/.test(str) &&
        str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
}

rootFiles.keys().forEach(key => {
    const fileName = validateFileName(key);
    rootRouters.push({
        name: fileName,
        path: `/${fileName}`,
        component: rootFiles(key).default
    }) // 读取出文件中的default模块
})

configRouters = configRouters.concat(rootRouters);

const routes = [{
    path: '/',
    redirect: '/index',
    component: Layout,
    children: configRouters
}];
console.log('路由=', configRouters);

const router = new VueRouter({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    to.params.isTabShow = to.meta.isTabShow || false;
    to.params.isHeadShow = to.meta.isHeadShow || false;
    console.log(router);
    console.log(to);
    next() // 确保一定要调用 next()
});

export default router;