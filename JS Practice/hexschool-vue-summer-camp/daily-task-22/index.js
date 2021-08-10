const { ref } = Vue
const app = Vue.createApp({
  setup() {
    const status = ref(false);
    
    const openBox = () => status.value = true;

    return{
      status,
      openBox,
    }
  }
});

app.mount('#app');
