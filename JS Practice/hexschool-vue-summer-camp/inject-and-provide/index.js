const app = Vue.createApp({
    data() {
        return {
            msg: 'hello vue',
        };
    },
    provide() {
        return {
            provideMsg: this.msg,
            provideMsg2: Vue.computed(() => this.msg),
        };
    },
});

app.component('list-component', {
    template: `
        <ul>
            <li v-for="i in 3">
                {{ i }}
                <list-item></list-item>
            </li>
        </ul>`,
    components: {
        'list-item': {
            inject: ['provideMsg', 'provideMsg2'],
            template: `
                <div>1{{ provideMsg }}</div>
                <div>2{{ provideMsg2.value }}</div>`,
        },
    },
});

app.mount('#app');
