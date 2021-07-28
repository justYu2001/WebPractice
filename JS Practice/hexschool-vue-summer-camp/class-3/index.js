const app = Vue.createApp({
    data() {
        return {
            text: "hi",
            num: 1,
            name: "",
            items:[],
            temp:{},
        }
    },
    methods: {
        addNum(){
            this.num++;
        },
        addItem(){
            this.items.push({
                name: this.name,
                id: `${this.name}-${this.items.length}`
            });
            this.name = '';
        },
        removeItem(id){
            const index = this.items.findIndex((item) => item.id === id);
            this.items.splice(index ,1);
        },
        editItem(item){
            this.temp = {...item};
        },
        saveItem(id){
            const index = this.items.findIndex((item) => item.id === id);
            this.temp.id = `${this.temp.name}-${index}`
            this.items[index] = this.temp;
            this.temp = {};
        }
    },
    computed: {
        doubleNum(){
            return this.num * 2;
        }
    },
    mounted() {
        
    }
});

app.mount("#app");