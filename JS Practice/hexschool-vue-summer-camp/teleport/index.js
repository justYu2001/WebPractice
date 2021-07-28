const app = Vue.createApp({
    data() {
        return {
            options: ['header', 'default', 'footer'],
            dynamic_slot_name: 'header',
            langOptions: [
                { name: '繁體中文', val: 'tw' },
                { name: '日文', val: 'jp' },
                { name: 'English', val: 'en' },
            ],
            lang: 'tw',
        };
    },
});

app.component('light-box', {
    template: `
        <div class="light-box">
            <teleport to='body'>
                <div class="modal-container" v-show="isShow" @click.self="isShow = false">
                    <div class="modal-body">
                        <header>
                            <slot name="header">Default header</slot>
                        </header>
                        <main>
                            <slot>Default body</slot>
                        </main>
                        <footer>
                            <slot name="footer">Default footer</slot>
                        </footer>
                    </div>
                </div>
            </teleport>
            <button @click="isShow = true">Click me</button>
        </div>`,
    data() {
        return {
            isShow: false,
        };
    },
});

app.component('multi-lang-light-box', {
    template: `
        <div class="light-box">
            <teleport to='body'>
                <div class="modal-container" v-show="isShow" @click.self="isShow = false">
                    <div class="modal-body">
                        <main>
                            <slot name="default" :hello="helloString[lang]"></slot>
                        </main>
                    </div>
                </div>
            </teleport>
            <button @click="isShow = true">Click me</button>
        </div>`,
    data() {
        return {
            helloString: {
                tw: '哈囉！世界！',
                jp: 'ハロー・ワールド!',
                en: 'Hello world!',
            },
            isShow: false,
        };
    },
    props: {
        lang: String,
    },
});

app.mount('#app');
