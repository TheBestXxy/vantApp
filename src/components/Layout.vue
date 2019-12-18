<template>
    <div>
        <div v-if="isHeadShow">
            <x-bar :title="title"></x-bar>
        </div>
        <router-view />
        <div v-if="isTabShow">
            <x-tab></x-tab>
        </div>
    </div>
</template>

<script>
import xBar from "@/components/xbar.vue";
import xTab from "@/components/xtab.vue";
export default {
    components: {
        xBar,
        xTab
    },
    watch: {
        $route(now, old) {
            this.isHeadShow = this.$route.params.isHeadShow;
            this.isTabShow = this.$route.params.isTabShow;
        }
    },
    data() {
        return {
            title: document.title,
            isHeadShow: this.$route.params.isHeadShow,
            isTabShow: this.$route.params.isTabShow
        };
    },
    mounted() {}
};
</script>
<style lang="less"></style>
