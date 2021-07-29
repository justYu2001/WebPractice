const app = Vue.createApp({
    data() {
        return {
            styleObject: {
                background: 'black',
                width: '150px',
                height: '150px',
            },
            course: 'test',
        };
    },
    methods: {
        toggle() {
            this.styleObject = {
                background: 'blue',
                width: '150px',
                height: '150px',
            };
            this.course = 'Vue 夏令營';
        },
    },
});
app.mount('#app');
