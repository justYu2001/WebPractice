const app = Vue.createApp({
    data() {
      return {
        text1: "123",
        text2: "456"
      }
    },
    methods:{
      lookText(){ 
        console.log(typeof(this.text1),typeof(this.text2))
      }
    }
});
app.mount('#app');
  