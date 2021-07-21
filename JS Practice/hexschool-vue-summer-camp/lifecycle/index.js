const app = Vue.createApp({
    data() {
        return {
            msg: "hello",
            text: "",
            messages: [],
            message: "",
            scrollHeight: 0,
            realScrollHeight: 0,
        }
    },
    watch: {
        text(val, oldVal){
            console.log("new:", val);
            console.log("old:", oldVal);
        }
    },
    methods: {
        addToMessages(){
            this.messages.push(this.message);
            this.message = "";
            this.$nextTick(() => {
                const el = document.querySelector(".messages");
                this.scrollHeight = el.scrollHeight;
                el.scrollTop = el.scrollHeight;
                this.realScrollHeight = el.scrollHeight;
            });
        },
    },
    created() {
        console.log("created");
    },
    mounted() {
        console.log("mounted");
        const el = document.querySelector(".messages");
        this.scrollHeight = el.scrollHeight;
        this.realScrollHeight = el.scrollHeight;
    },
    unmounted() {
        console.log("unmounted");
    },
});

app.mount("#app");

// app.unmount();