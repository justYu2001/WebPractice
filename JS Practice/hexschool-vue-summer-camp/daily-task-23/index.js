const { ref, onMounted } = Vue;
const app = Vue.createApp({
    setup() {
        const status = ref(false);
        const openBox = () => {
            status.value = true;
        };

        onMounted(() => openBox());
        return {
            status,
        };
    },
});
app.mount("#app");
