const app = Vue.createApp({
    methods: {
        seachBox() {
            const box = document.querySelector('.box');
            console.log(box);
        },
    },
    mounted() {
        this.seachBox();
    },
});

app.mount('#app');
