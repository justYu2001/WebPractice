const app = Vue.createApp({
    data() {
        return {
            text:"",
        }
    },
    computed: {
        isValid () {
            return this.text.length > 10;
        },
        textStyle () {
            if(this.isValid){
                return "error";
            } else {
                return "";
            }
        }
    },
}).mount("#app");