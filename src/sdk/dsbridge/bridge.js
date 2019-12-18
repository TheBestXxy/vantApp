import dsBridge from 'dsbridge'

//Call synchronously 
// var str = dsBridge.call("testSyn", "testSyn");

//Call asynchronously
// dsBridge.call("testAsyn", "testAsyn", function (v) {
//     alert(v);
// })

//Register javascript API for Native
// dsBridge.register('addValue', function (l, r) {
//     return l + r;
// })

// H5 掉起原生
function callHandler(name, data, callback) {
    dsBridge.call(name, data, callback);
}

// 原生掉起H5
function registerHandler(name, callback) {
    dsBridge.register(name, callback);
}

const $bridge = {
    CheckUpdate() {
        callHandler('CheckUpdate', '123', (res) => {
            console.log('CheckUpdate is success');
            // alert(res);
        })
    }
}
export default $bridge;

// 系统返回上一级
registerHandler('GoBack', (res) => {
    console.log('GoBack is success');
    return res;
})