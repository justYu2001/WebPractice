const app = Vue.createApp({
    template: `<div>我是{{ name }}</div>`,
    data() {
        return {
            name: "Yu",
            price: 100,
            quantity: 10,
        }
    },
});

const vMountedInstance = app.mount("#app");

// app.$data.name = "justYu2001";

vMountedInstance.$data.name = "justYu2001";