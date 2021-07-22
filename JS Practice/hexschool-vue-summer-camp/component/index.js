const app = Vue.createApp({
    components:{
        "local-component":{
            template:`<div>local</div>`,
        },
    },
});

app.component("my-component", {
    template: `<div>Hello Vue!</div>`,
    data() {
        return {
            
        }
    },
    props:{},
    methods: {
        
    },
    computed:{

    }
});

app.component("media-block", {
    template: "#media-block",
});

app.mount("#app");