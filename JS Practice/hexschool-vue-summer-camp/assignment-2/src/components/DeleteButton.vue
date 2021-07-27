<template>
    <button :class="$style.['delete-button']" @click="deleteLastCharacter">
        ⌫
    </button>
</template>

<script>
export default {
    name: 'DeleteButton',
    props: {
        expression: Array,
    },
    emits: ['update:expression', 'update:result'],
    methods: {
        deleteLastCharacter() {
            if (this.expression.includes('=')) {
                return;
            }
            if (this.expression.length > 0) {
                this.$emit('update:expression', this.expression.slice(0, -1));
            } else if (this.expression.slice(-1)[0] === '=') {
                this.$emit('update:expression', []);
                this.$emit('update:result', '');
            }
        },
    },
};
</script>

<style module lang="scss">
@import '@/assets/scss/components/button';

.delete-button {
    @extend %btn-lg;
}
</style>
