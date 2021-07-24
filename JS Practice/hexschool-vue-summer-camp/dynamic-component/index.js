const app = Vue.createApp({
    data() {
        return {
            currentTab: 'home',
            tabs: ['home', 'profile', 'contact'],
        };
    },
    computed: {
        currentTabComponent() {
            return `tab-${this.currentTab}`;
        },
    },
});

app.component('tab-home', {
    name: 'tab-home',
    template: `
        <div class="tab-pane active">
            <input type="text" v-model="title">
        </div>`,
    data() {
        return {
            title: 'home',
        };
    },
});

app.component('tab-profile', {
    template: `
        <div class="tab-pane active">
            <input type="text" v-model="title">
        </div>`,
    data() {
        return {
            title: 'profile',
        };
    },
});

app.component('tab-contact', {
    name: 'tab-contact',
    template: `
        <div class="tab-pane active">
            <input type="text" v-model="title">
        </div>`,
    data() {
        return {
            title: 'contact',
        };
    },
});

app.mount('#app');
