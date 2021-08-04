import { createApp, ref, reactive, computed, onMounted } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.0-beta.7/vue.esm-browser.min.js';

const app = createApp({
    setup() {
        const text = ref('hi');
        const person = reactive({
            name: 'yu',
        });

        const person2 = ref({
            name:'yu',
        });

        const getText = ()=>console.log(text.value);

        onMounted(() => {
            getText();
        });

        onMounted(() => {
           person2.value.name = 'jack'; 
        });

        const num = ref(1);
        const doubleNum = computed(()=> num.value * 2);

        //todo
        const name = ref('');
        const items = ref([]);
        const temp = ref({});

        const addItem = () =>{
            items.value.push({
                name: name.value,
                id: `${name.value}-${items.value.length}`,
            });
            name.value = '';
        };

        const removeItem = (id) =>{
            items.value = items.value.filter((item) => id !== item.id);
        };

        const editItem = (item) =>{
            temp.value = { ...item };
        };

        const saveItem = (id) => {
            const index = items.value.findIndex((item) => item.id === id);
            items.value[index] = {
                name: temp.value.name,
                id: `${temp.value.name}-${index}`,
            }
            temp.value = {};
        };

        return{
            text,
            person,
            getText,
            person2,
            num,
            doubleNum,
            name,
            items,
            temp,
            addItem,
            removeItem,
            editItem,
            saveItem,
        }
    }
});

app.mount('#app');