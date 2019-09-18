<template>
    <transition name="van-slide">
        <div>
            <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
            <router-link to="/index">
                {{text}}
            </router-link>
            <van-grid>
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
            </van-grid>
        </div>
    </transition>
</template>

<script>

export default {
    name: '',
    components: {

    },
    data () {
        return {
            text: '123',
            show: false,
            actions: [
                { name: '选项' },
                { name: '选项' },
                { name: '选项', subname: '描述信息' }
            ]
        }
    },
    mounted () {
        console.log(this);
    },
    methods: {
        onSelect (item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show = false;
            this.$toast(item.name);
        },
        myclick () {
        },
        onClickLeft () {
            this.$notify('通知内容');
        },
        onClickRight () {
            this.$toast('按钮');
        }
    }
}
</script>

<style lang="less" scoped>
.demo-list {
    width: 7.5rem;
    height: 10rem;
}
</style>

