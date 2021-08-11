<template>
    <h1>Post from User-{{ userId }}</h1>
    <ol>
        <li v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </li>
    </ol>
</template>

<script>
import { useRoute } from "vue-router";

import { ref, computed, watchEffect } from "vue";

import axios from "axios";

export default {
    name: "Post",
    setup() {
        const route = useRoute();

        const userId = computed(() => route.params.userId);
        const posts = ref([]);

        const getUserPosts = async (id) => {
            try {
                const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
                const res = await axios.get(url);
                return res.data;
            } catch (error) {
                console.log(error);
            }
        };

        watchEffect(async () => {
            posts.value = await getUserPosts(userId.value);
        });

        return {
            userId,
            posts,
        };
    },
};
</script>