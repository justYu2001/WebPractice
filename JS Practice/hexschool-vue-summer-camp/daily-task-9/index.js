const app = Vue.createApp({
    data() {
      return {
        text1:"Vue 夏令營",
      }
    },
    methods:{
      lookText(){
        console.log(this.text1)
      }
    }
});
app.mount('#app');
  