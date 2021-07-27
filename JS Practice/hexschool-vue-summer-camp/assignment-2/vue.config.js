module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ` @import '@/assets/scss/utilities/variables.scss';`,
            },
        },
    },
};
