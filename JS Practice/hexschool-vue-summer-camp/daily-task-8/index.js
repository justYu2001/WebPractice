const app = Vue.createApp({
    data() {
      return {
        text1:"Vue 夏令營",
      }
    },
    mounted() {
        this.text1 = "hi";
    },
  })
app.mount('#app');
  