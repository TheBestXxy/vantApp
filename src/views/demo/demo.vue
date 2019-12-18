<template>
    <section>
        <div v-loading="vloading">
            demo
        </div>
    </section>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            vloading: true
        };
    },
    mounted() {},
    methods: {
        async getData() {
            let _this = this;
            this.$nextTick(() => {
                _this.vloading = false;
            });
        }
    }
};
</script>

<style lang="less" scoped></style>
