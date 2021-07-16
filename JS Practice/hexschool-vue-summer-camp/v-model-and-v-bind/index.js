const app = Vue.createApp({
    data() {
        return {
            customId: "item-id-1",
            isBtnDisable: true,
            btnText: "啟用",
            message: "",
            pick: "1",
            people:[],
            status: false,
            city:"",
            lazyMessage: "",
            num1: 0,
            num2: 0,
        }
    },
    methods: {
        toggleDisable(){
            if(this.isBtnDisable){
                this.btnText = "禁用";
            } else {
                this.btnText = "啟用";
            }
            this.isBtnDisable = !this.isBtnDisable;
        }
    },
    computed: {
        sum() {
            return this.num1 + this.num2;
        }
    },
}).mount("#app");