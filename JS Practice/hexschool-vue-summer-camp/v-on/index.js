const app = Vue.createApp({
    data() {
        return {
            amount: 1,
            count: 0,
            status: false,
            isShow: false,
        }
    },
    methods: {
        plus(event, amount) {
            console.log(event);
            this.count += amount;
        },
        log(event){
            console.log(`click ${event.target.tagName.toLowerCase()}`);
        },
    },
    computed: {
        modalMask (){
            console.log(this.isShow);
            if(this.isShow){
                return "modal-mask active";
            } else {
                return "modal-mask";
            }
        }
    },
}).mount("#app");