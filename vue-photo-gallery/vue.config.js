module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import '@/assets/scss/utilities/variables.scss';`,
            },
        },
    },
};