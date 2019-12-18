import demo from './demo.vue'

const routes = [{
    path: '/demo',
    component: demo,
    meta: {
        isHeadShow: true,
        isTabShow: true, // 需要底部tab
        title: "demo", //配置title
        keepAlive: true //是否缓存
    }
}];

export {
    routes
};