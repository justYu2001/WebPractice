const app = Vue.createApp({
    data() {
        return {
            text:"Yu",
            num: 1,
            person:{
                name: "Yu",
                gender: "male",
                cash: 1000000000000000,
                image: "business-man.png"
            },
            people: [
                {
                    name: "one",
                    gender: "male",
                    cash: 1000,
                    image: "user.png"
                },
                {
                    name: "two",
                    gender: "female",
                    cash : 10000000,
                    image: "woman.png"
                },
            ],
            peopleObj:{
                one: {
                    name: "one",
                    gender: "male",
                    cash: 1000,
                    image: "user.png"
                },
                two: {
                    name: "two",
                    gender: "female",
                    cash : 10000000,
                    image: "woman.png"
                },
            },
            isActive: false,
            activatedTab: "home",
        }
    },
    methods: {
        changeCash (person) {

        }
    },
}).mount("#app");