<template>
    <button :class="$style['clear-button']" @click="clear">
        C
    </button>
</template>

<script>
export default {
    name: 'ClearButton',
    props: {
        expression: Array,
    },
    emits: ['update:expression', 'update:result'],
    methods: {
        clear() {
            this.$emit('update:expression', []);
            this.$emit('update:result', '');
        },
    },
};
</script>

<style module lang="scss">
@import '@/assets/scss/components/button';

.clear-button {
    @extend %btn-lg;
    background-color: #fff;
    &:hover {
        background-color: #e8e8e8;
    }
}
</style>
