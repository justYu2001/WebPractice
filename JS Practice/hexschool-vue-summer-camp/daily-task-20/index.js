const { ref } = Vue
const app = Vue.createApp({
    setup() {
        const text = ref('composition');
        text.value = 'hi';
        return {
            text,
        }
    }
});

app.mount('#app');
