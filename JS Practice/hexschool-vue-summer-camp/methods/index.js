const app = Vue.createApp({
    data() {
        return {
            price: 100,
            quantity: 10,
            twd: 1,
        }
    },
    methods: {
        subtotal(){
            return this.price * this.quantity;
        }
    },
    computed: {
        subtotalComputed (){
            return this.price * this.quantity;
        },
        jpy: {
            get () {
                return parseFloat(Number(this.twd) / 0.278).toFixed(3);
            },
            set (val) {
                this.twd = parseFloat(Number(val) * 0.278).toFixed(3);
            }
        },
        usd:{
            get () {
                return parseFloat(Number(this.twd) / 28.540).toFixed(3);
            },
            set (val) {
                this.twd = parseFloat(Number(val) * 28.540).toFixed(3);
            }
        }
    },
}).mount("#app");