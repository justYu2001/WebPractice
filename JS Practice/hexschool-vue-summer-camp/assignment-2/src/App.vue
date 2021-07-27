<template>
    <Caculator></Caculator>
    <History></History>
</template>

<script>
import { computed } from 'vue';
import Caculator from '@/components/Caculator.vue';
import History from '@/components/History.vue';

export default {
    name: 'App',
    components: {
        Caculator,
        History,
    },
    data() {
        return {
            history: [],
        };
    },
    provide() {
        return {
            history: computed(() => this.history),
        };
    },
    mounted() {
        const history = window.localStorage.getItem('history');
        if (history) {
            this.history = history.split(',');
        } else {
            window.localStorage.setItem('history', []);
        }
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/base/reset';
#app {
    background-color: #f0f0f0;
    display: flex;
    height: 100vh;
}
</style>
