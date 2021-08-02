const availableEventsList = [
    'click',
    'input',
    'keydown',
    'keypress',
    'keyup',
    //...更多事件
];

const app = Vue.createApp({});

app.directive('img-fallback', {
    mounted(el) {
        el.addEventListener('error', () => {
            el.src = 'https://dummyimage.com/150x150/000/ffffff&text=no+image';
        });
    },
});

app.directive('event-track', {
    mounted(el, binding) {
        const { value, modifiers } = binding;

        // 用event_track進行記錄
        for (const event of modifiers) {
            if (availableEventsList.includes(event)) {
                el.addEventListener(
                    event,
                    event_track(value.category, value, value.label)
                );
                break;
            }
        }
    },

    beforeUnmount(el, binding) {
        const { value, modifiers } = binding;
        for (const event of modifiers) {
            if (availableEventsList.includes(event)) {
                el.removeEventListener(
                    event,
                    event_track(value.category, value, value.label)
                );
                break;
            }
        }
    },
});

app.mount('#app');
