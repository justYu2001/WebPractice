import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js";

createApp({
    data() {
        return {
            text: "Hello Vue!",
            num: 0,
            person:{
                name: "Yu",
                gender: "male",
                cash: 1000000000000000,
                image: "business-man.png"
            },
            people: [
                {
                    name: "one",
                    gender: "male",
                    cash: 1000,
                    image: "user.png"
                },
                {
                    name: "two",
                    gender: "female",
                    cash : 10000000,
                    image: "woman.png"
                }
            ]
        };
    },
    methods: {
        increaseCash(obj) {
            obj.cash++;
        }
    },
    mounted() {
        
    },
}).mount("#app");