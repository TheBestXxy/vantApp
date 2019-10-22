import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '@/views/index.vue';
Vue.use(VueRouter);

const files = require.context('@/views', true, /index.js$/)
let configRouters = [];
console.log(files.keys()) // ["./home.js"] 返回一个数组

files.keys().forEach(key => {
    if (key === './index.js') return
    configRouters = configRouters.concat(files(key).routes) // 读取出文件中的default模块
})

const rootFiles = require.context('@/views', false, /\.vue$/)
let rootRouters = [];
console.log(rootFiles)

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
        path: `/${fileName}`,
        component: rootFiles(key).default
    }) // 读取出文件中的default模块
})


const routes = [{
    path: '/',
    redirect: '/index',
}];

configRouters = configRouters.concat(routes);
configRouters = configRouters.concat(rootRouters);
console.log(configRouters);

export default new VueRouter({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: configRouters
})