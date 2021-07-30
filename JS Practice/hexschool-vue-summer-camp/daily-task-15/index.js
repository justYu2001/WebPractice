const app = Vue.createApp({
    data() {
        return {
            price: 3500,
        };
    },
    computed: {
        discountPrice() {
            return this.price * 0.8;
        },
    },
}).mount('#app');
