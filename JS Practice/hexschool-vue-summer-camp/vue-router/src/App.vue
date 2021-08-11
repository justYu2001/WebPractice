<template>
    <h1>Hello Vue Router App!</h1>
    <button @click="goHome">home</button>
    <button @click="goHomewithPath">go home with path</button>
    <button @click="showUserOne">user 1</button>
    <button @click="search">search</button>
    <button @click="back">上一頁</button>
    <button @click="forward">下一頁</button>

    <router-view name="Header"></router-view>
    <router-view name="Nav" />
    <router-view></router-view>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    name: "APP",
    setup() {
        const router = useRouter();

        const goHome = () => router.push("/home");
        const goHomewithPath = () => router.push({ path: "/home" });
        const showUserOne = () => {
            router.push({ name: "User", params: { userId: "1" } });
        };

        const search = () => {
            router.push({ path: "/search", query: { q: "abc" } });
        };

        const forward = () => router.go(1);
        const back = () => router.go(-1);

        router.beforeEach((to, from) => {
            console.log(`要從${from.path}進入${to.fullPath}了`);
        });

        router.beforeResolve((to, from) => {
            console.log(
                `所有非同步元件載入完了！要從${from.path}進入${to.fullPath}了`
            );
        });

        router.afterEach((to, from, failure) => {
            if (!failure) {
                console.log(`跳轉成功！從${from.fullPath}到${to.fullPath}了`);
            } else {
                console.log("跳轉失敗");
            }
        });

        return {
            goHome,
            goHomewithPath,
            showUserOne,
            search,
            forward,
            back,
        };
    },
};
</script>