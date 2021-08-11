import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AppHeader from "../components/AppHeader.vue";
import AppNav from "../components/AppNav.vue";
import AppBody from "../components/AppBody.vue";

const routes = [
    {
        path: "/",
        alias: ["/real-home", "/root"],
        name: "Home",
        components: {
            default: Home,
            Header: AppHeader,
            Nav: AppNav,
        },
        beforeEnter: (to, from) => {
            console.log(`要從${from.path}到首頁了`);
        },
    },
    {
        path: "/home",
        redirect: "/",
    },
    {
        path: "/profile",
        redirect: { name: "About" },
    },
    {
        path: "/search/:searchText",
        redirect: (to) => {
            return {
                path: "/search",
                query: {
                    q: to.params.searchText,
                },
            };
        },
    },
    {
        path: "/about",
        name: "About",
        props: { text: "about" },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/users/:userId(\\d+)",
        name: "User",
        component: () => import("../views/User.vue"),
        props: true,
        children: [
            {
                path: "posts",
                component: () => import("../views/Post.vue"),
            },
        ],
    },
    {
        path: "/pages",
        component: () => import("../views/Page.vue"),
        children: [
            {
                path: "",
                components: {
                    default: AppBody,
                    Header: AppHeader,
                    Nav: AppNav,
                },
            },
        ],
    },
    {
        path: "/search",
        props: (route) => ({ query: route.query.q }),
        component: () => import("../views/Search.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
