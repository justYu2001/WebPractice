const app = Vue.createApp({
    data() {
        return {
            imgurl: 'https://i.imgur.com/ZrYOXQY.jpeg',
            styleObject: {
                background: 'red',
                width: '150px',
                height: '150px',
            },
        };
    },
});
app.mount('#app');
