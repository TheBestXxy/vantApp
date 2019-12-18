<template>
    <transition>
        <div class="tab">
            <van-tabbar fixed v-model="active" inactive-color=" #666666" active-color="#307FF6">
                <van-tabbar-item name="index" icon="wap-home" to="/index">首页</van-tabbar-item>
                <van-tabbar-item name="todo" icon="certificate" dot to="/todo">待办</van-tabbar-item>
                <van-tabbar-item name="email" icon="envelop-o" :info="unreadedEmailNum" to="/email">邮箱</van-tabbar-item>
                <van-tabbar-item name="mine" icon="contact" to="/usercenter">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </transition>
</template>

<script>

export default {
    // props: {
    //     mactive: {
    //         type: Number,
    //         default: 1
    //     }
    // },
    components: {

    },
    data() {
        return {
            active: 'index',
            unreadedEmailNum: 0,
            untodoNum: 0
        }
    },
    computed: {

    },
    methods: {
        unreaded() {
            let _this = this;
            //获取邮箱未读数量
            this.$axios.post("/email/emailOauth/unReadNumber")
                .then(res => {
                    _this.unreadedEmailNum = res.number;
                }).catch(function (error) {
                    // console.log(error);
                });
            //获取代办未读数量
            this.$axios.post("/a/process/taskListNumber.do")
                .then(res => {
                    _this.untodoNum = res.number;
                }).catch(function (error) {
                    // console.log(error);
                });
        }
    },
    created() { },
    mounted() {
        this.active = this.$route.name;
        this.unreaded();
    }
}
</script>

<style lang="less" scoped>
.tab {
    font-weight: 600;
}
</style>