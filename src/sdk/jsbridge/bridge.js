import bridge from '@/api/bridge-sdk.js'

// 调用原生方法
const $bridge = {
    CheckUpdate() {
        bridge.callHandler('CheckUpdate', '123', (res) => {
            console.log('CheckUpdate is success');
            alert(res)
        });
    },
}

// 注册
bridge.registerHandler('GetVersion', (res) => {
    console.log('GetVersion is success');
    alert(res.version)
})
export default $bridge;