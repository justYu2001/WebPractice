const app = Vue.createApp({
    data() {
        return {
            family: {
                dad: {
                    FirstName: '林',
                    LastName: '天成',
                    FullName: '林天成',
                },
                mom: {
                    FirstName: '董',
                    LastName: '淑芬',
                    FullName: '董淑芬',
                },
                child: {
                    FirstName: '林',
                    LastName: '',
                    FullName: '',
                },
            },
        };
    },
    watch: {
        'family.child': {
            handler(val) {
                val.FullName = val.FirstName + val.LastName;
            },
            deep: true,
        },
    },
});
app.mount('#app');
