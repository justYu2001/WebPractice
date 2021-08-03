const app = Vue.createApp({
    data() {
        return {
            price: 3500,
            discountPrice: 2800,
        };
    },
    watch: {
        price(val) {
            this.discountPrice = Number.parseInt(val * 0.8);
        },
    },
}).mount('#app');
