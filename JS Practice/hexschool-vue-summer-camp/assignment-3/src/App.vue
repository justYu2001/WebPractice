<template>
    <Title></Title>
    <Input v-model:tasks="tasks"></Input>
    <List v-model:tasks="tasks"></List>
</template>

<script>
import Title from '@/components/Title.vue';
import Input from '@/components/Input.vue';
import List from '@/components/List.vue';

export default {
    name: 'App',
    components: {
        Title,
        Input,
        List,
    },
    data() {
        return {
            tasks: [],
        };
    },
    created() {
        const tasks = window.localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        } else {
            window.localStorage.setItem('tasks', JSON.stringify([]));
        }
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/base/reset';
#app {
    width: 1200px;
    margin: auto;
    margin-top: 60px;
}
</style>
