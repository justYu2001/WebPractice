const app = Vue.createApp({
    data() {
        return {
            isShow: false,
            slideShow: false,
            listShow: true,
            listGroupShow: true,
            block: 'A',
            options: ['A', 'B', 'C'],
            numberLists1: [1, 2, 3, 4, 5],
            numberLists2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10,
            noActivated: false,
            height: 0,
            user: {},
            isLoading: false,
        };
    },
    methods: {
        createRandomNumber() {
            this.numberLists1.push(Math.round(Math.random() * 100));
        },
        randomIndex() {
            return Math.floor(Math.random() * this.numberLists2.length);
        },
        add() {
            this.numberLists2.splice(this.randomIndex(), 0, this.nextNum++);
        },
        shuffle() {
            this.numberLists2.sort(() => Math.random() - 0.5);
        },
        reactivated() {
            this.noActivated = false;
        },
        getRandomUserId() {
            return Math.floor(Math.random() * 10) + 1;
        },
        async getUser() {
            this.isLoading = true;
            this.user = {};
            const userId = this.getRandomUserId();
            const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
            try {
                const res = await axios.get(url);
                window.setTimeout(() => {
                    this.user = res.data;
                    this.isLoading = false;
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        },
        beforeEnter() {
            this.height = 0;
        },
        beforeLeave() {
            this.$nextTick(() => {
                this.height = this.$refs.content.clientHeight;
            });
        },
    },
});

app.mount('#app');
