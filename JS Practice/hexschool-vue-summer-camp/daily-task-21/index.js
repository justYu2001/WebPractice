const { reactive } = Vue;
const app = Vue.createApp({
    setup() {
        const course = reactive({
            name: "Vue 夏令營"
        });

        return {
            course,
        };
    },
});

app.mount("#app");
