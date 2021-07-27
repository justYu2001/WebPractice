module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production'
            ? '/WebPractice/JS%20Practice/hexschool-vue-summer-camp/assignment-2/'
            : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: ` @import '@/assets/scss/utilities/variables.scss';`,
            },
        },
    },
};
