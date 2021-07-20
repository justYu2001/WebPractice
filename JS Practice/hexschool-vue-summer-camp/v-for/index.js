const app = Vue.createApp({
    data() {
        return {
            arr: ["Monday", "Tuesday", "Wednesday"],
            person: {
                name: "Yu",
                age: 20,
                gender: "male",
            },
            numbers:[10, 4, 3, 2, 9, 8, 7, 6, 5, 1],
            lists: [
                {
                    id: "task001",
                    title: "one",
                    isDone: false,
                },
                {
                    id: "task002",
                    title: "two",
                    isDone: false,
                },
                {
                    id: "task003",
                    title: "three",
                    isDone: false,
                }
            ],
        }
    },
    computed: {
        evenNumbers () {
            return this.numbers.filter((number) => number % 2 === 0);
        },
        sortedNumbers () {
            return [...this.numbers].sort((a, b) => a - b);
        },
        todoLists () {
            return this.lists.filter((thing) => !thing.isDone);
        },
        doneLists () {
            return this.lists.filter((thing) => thing.isDone);
        },
    }
}).mount("#app");