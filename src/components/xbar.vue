<template>
    <transition>
        <header>
            <van-nav-bar :title="title" :left-text="left" :right-text="right" left-arrow @click-left="onClickLeft" @click-right="onClickRight" fixed>
                <div v-if="!leftDefault" slot="left">
                    <slot name="left"></slot>
                </div>
                <div v-if="!titleDefault" slot="title">
                    <slot name="title"></slot>
                </div>
                <div v-if="!rightDefault" slot="right">
                    <slot name="right"></slot>
                </div>
            </van-nav-bar>
        </header>
    </transition>
</template>

<script>

export default {
    components: {

    },
    props: {
        title: {
            type: String
        },
        left: {
            type: String
        },
        right: {
            type: String
        },
        // 左侧是否使用默认返回
        leftDefault: {
            type: Boolean,
            default: true
        },
        titleDefault: {
            type: Boolean,
            default: true
        },
        rightDefault: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
        }
    },
    computed: {},
    methods: {
        onClickRight() {
            if (this.rightDefault) {
                this.$emit("onClickRight");
            }

        },
        onClickLeft() {
            if (this.leftDefault) {
                this.$router.go(-1);
            }

        }
    },
    created() { },
    mounted() { }
}
</script>

<style lang="less" scoped>
.van-nav-bar__title {
    color: rgba(255, 255, 255, 1);
}
.van-nav-bar__left {
    i {
        color: #ffffff;
    }
}
.van-nav-bar {
    background: linear-gradient(
        133deg,
        rgba(63, 100, 246, 1) 0%,
        rgba(88, 149, 255, 1) 100%
    );
    width: 7.5rem;
}
</style>