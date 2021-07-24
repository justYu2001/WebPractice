import {
    createApp,
    defineAsyncComponent,
} from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.5/vue.esm-browser.min.js';

const app = createApp({});

const AsyncComp = defineAsyncComponent(
    () =>
        new Promise((resolve, reject) => {
            resolve({
                template: `<h1>I am async</h1>`,
            });
        })
);

const AsyncCompByImport = defineAsyncComponent(() =>
    import('./async_comp_by_import.js')
);

app.component('async-example', AsyncComp);
app.component('async-by-import', AsyncCompByImport);

app.mount('#app');
