<template>
    <h1>User:{{ userId }} - {{ userInfo.name }}</h1>
    <p>username: @{{ userInfo.username }}</p>
    <p>email: {{ userInfo.email }}</p>
    <p>phone: {{ userInfo.phone }}</p>

    <h2>Show</h2>
    <router-link :to="`/users/${userId}/posts`">
        /users/{{ userId }}/posts
    </router-link>
    <router-view></router-view>
</template>

<script>
import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
import { ref, computed, watchEffect } from "vue";

import axios from "axios";

export default {
    name: "User",
    props: {
        userId: String,
    },
    setup(props) {
        const route = useRoute();

        const userInfo = ref({});

        const userId = computed(() => props.userId);

        const getUserInfo = async (id) => {
            try {
                if (!id) return;
                const url = `https://jsonplaceholder.typicode.com/users/${id}`;
                const res = await axios.get(url);
                return res.data;
            } catch (error) {
                console.log(error);
            }
        };

        watchEffect(async () => {
            userInfo.value = await getUserInfo(userId.value);
        });

        onBeforeRouteUpdate((to, from) => {
            console.log(`你剛剛在看user${from.params.userId}`);
            console.log(`你現在在看user${to.params.userId}`);
        });

        onBeforeRouteLeave((to, from) => {
            const answer = window.confirm("是否要離開此頁面？");
            if (!answer) return false;
        });

        return {
            userInfo,
            userId,
        };
    },
};
</script>
