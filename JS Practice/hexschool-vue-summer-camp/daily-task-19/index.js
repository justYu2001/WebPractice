const { ref } = Vue;
const app = Vue.createApp({
    setup() {
        const text = ref('hi');

        return {
            text,
        };
    },
});

app.mount('#app');
