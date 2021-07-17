const app = Vue.createApp({
    data() {
        return {
            text: "",
            msg: "",
            isShow: false,
        }
    },
    methods: {
        updateMsg () {
            this.msg = this.text;
        },
        logKey(event){
            console.log(event.key);
        },
        toggleMenu () {
            this.isShow = !this.isShow;
        }
    },
    computed: {
        menuStyle() {
            if(this.isShow){
                return "menu active";
            } else {
                return "menu";
            }
        }
    },
}).mount("#app");