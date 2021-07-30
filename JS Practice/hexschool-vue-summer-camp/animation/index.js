const app = Vue.createApp({
    data() {
        return {
            noActivated: false,
            animateClasses: [
                'bounce',
                'rubberBand',
                'tada',
                'shakeY',
                'shakeX',
            ],
            animatedClassName: '',
        };
    },
    methods: {
        reactivated() {
            this.noActivated = false;
        },
        activateAnimate(className) {
            this.animatedClassName = `animate__animated animate__${className}`;
        },
    },
});

app.mount('#app');
