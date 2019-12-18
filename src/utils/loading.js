import Vue from "vue";
import {
    Toast
} from 'vant';

Vue.use(Toast)
Vue.directive('loading', {
    bind: function (el, binding, vnode) { //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        console.log("1" + binding.value);
        Toast.loading({
            duration: 0, // 持续展示 toast  
            forbidClick: false, //禁止背景点击
            message: '数据加载中...',
            overlay: true, //背景遮罩层打开,
            loadingType: 'spinner' //加载图形
        });
    },
    update: function (el, binding, vnode) { //所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
        console.log("2" + binding.value);
    },
    inserted: function (el, binding, vnode) { //被绑定元素插入父节点时调用 
        console.log("3" + binding.value);
        if (!binding.value) { //页面上的元素加载完毕,没有动态增加dom元素
            // 手动清除 Toast
            Toast.clear();
        }
    },
    componentUpdated: function (el, binding, vnode) { //指令所在组件的 VNode 及其子 VNode 全部更新后调用。
        console.log("4" + binding.value);
        if (!binding.value) { //动态增加完成dom
            // 手动清除 Toast
            Toast.clear();
        }
    },
    unbind: function (el, binding, vnode) { //只调用一次，指令与元素解绑时调用
        console.log("5" + binding.value);
        // 手动清除 Toast
        if (binding.value) { //页面还没加载完毕,直接切换其它页面操作
            Toast.clear();
        }
    }
});