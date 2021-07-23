const menuData = {
    name: '好書推薦',
    childNodes: [
        {
            name: 'Git',
            url: null,
            childNodes: [
                {
                    name: '為你自己學 Git',
                    url: 'https://www.tenlong.com.tw/products/9789864342662',
                },
            ],
        },
        {
            name: '前端開發',
            url: null,
            childNodes: [
                {
                    name: '金魚都能懂的 CSS 選取器',
                    url: 'https://www.tenlong.com.tw/products/9789864344994',
                },
                {
                    name: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
                    url: 'https://www.tenlong.com.tw/products/9789864344130',
                },
                {
                    name: '讓 TypeScript 成為你全端開發的 ACE！',
                    url: 'https://www.tenlong.com.tw/products/9789864344895',
                },
            ],
        },
        {
            name: 'IoT',
            url: null,
            childNodes: [
                {
                    name: 'IoT沒那麼難！新手用 JavaScript 入門做自己的玩具！',
                    url: 'https://www.tenlong.com.tw/products/9789864345328',
                },
            ],
        },
        {
            name: 'Chatbot',
            url: null,
            childNodes: [
                {
                    name: '人人可作卡米狗：從零打造自己的 LINE 聊天機器人',
                    url: 'https://www.tenlong.com.tw/products/9789864342938',
                },
            ],
        },
    ],
};

const app = Vue.createApp({
    data() {
        return {
            title: 'Hi',
            msg: '外層元件的msg',
            people: [
                {
                    id: 'p001',
                    name: 'yu',
                    age: '20',
                    country: 'Taiwan',
                },
                {
                    id: 'p002',
                    name: 'gura',
                    age: '9000',
                    country: 'Atlantis',
                },
            ],
            className: 'block',
            menuData,
        };
    },
    methods: {
        greeting() {
            alert('hi');
        },
        updateInfo(val) {
            const index = this.people.findIndex(
                (person) => person.id === val.id
            );
            this.people[index] = val;
        },
    },
    mounted() {
        console.log(this.$refs.child1.text);
        console.log(this.$refs.child2.text);
    },
});

app.component('my-component', {
    template: `
            <div>
                <p>從props來的parentMsg => {{ parentMsg }}</p>
                <p>自己的msg => {{ msg }}</p>
            </div>`,
    props: {
        parentMsg: {
            type: String,
        },
        propsNum: {
            type: [Number, String],
            required: true,
            validator: (value) => value > 0,
        },
        propsArray: {
            type: Array,
            default: [1, 2, 3],
        },
    },
    data() {
        return {
            msg: '子元件的msg',
        };
    },
});

app.component('person-info', {
    data() {
        return {
            personName: this.name,
            personAge: this.age,
            personCountry: this.country,
            personInfo: {
                id: this.id,
                name: this.name,
                age: this.age,
                country: this.country,
            },
        };
    },
    template: `
        <div>
            <p>名子:<input type="text" v-model="personInfo.name"></p>
            <p>年齡:<input type="text" v-model="personInfo.age"></p>
            <p>國家:<input type="text" v-model="personInfo.country"></p>
        </div>`,
    props: ['id', 'name', 'age', 'country'],
    emits: ['update'],
    watch: {
        personInfo: {
            deep: true,
            handler(val) {
                this.$emit('update', val);
            },
        },
    },
});

app.component('block', {
    inheritAttrs: false,
    template: `<div class="child-app"></div>`,
});

app.component('custom-layout', {
    template: `
        <header></header>
        <main v-bind="$attrs"></main>
        <footer></footer>`,
});

app.component('menu-component', {
    name: 'menu-component',
    template: `
        <ul>
            <li>
                <template v-if="children.length > 0">
                    <h2 
                        class="has-child"
                        :class="{ 'is-open': isOpen}"
                        @click="isOpen = !isOpen"
                    >{{ title }}</h2>
                    <menu-component
                        v-show="isOpen"
                        v-for="child in children"
                        :title="child.name"
                        :children="child.childNodes"
                        :url="child.url"
                    ></menu-component>
                </template>
                <a v-else :href="url">{{ title }}</a>
            </li>
        </ul>`,
    data() {
        return {
            isOpen: false,
        };
    },
    props: {
        title: String,
        url: String,
        children: {
            type: Array,
            default: [],
        },
    },
});

app.component('child-component', {
    template: `<div class="block" @click="logParent">child</div>`,
    props: ['text'],
    methods: {
        logParent() {
            console.log(this.$parent.msg);
        },
    },
});

app.component('custom-input', {
    template: `
        <input
            type="text"
            :value="title"
            @input="$emit('update:title', $event.target.value)"
        />`,
    props: {
        title: String,
    },
    emits: ['update:title'],
});

app.mount('#app');
