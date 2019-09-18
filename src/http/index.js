import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

//axios.defaults.baseURL = '/ifs/';

// consty env = '/ifs/';
// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = '';
// }

// 请求超时时间
axios.defaults.timeout = 15000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const http = {
    get: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                    params: params
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
        });
    },
    post: function (url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params))
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
        });
    }
}
export default http;