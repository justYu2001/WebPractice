<template>
    <button :style="order" :class="$style['number-button']" @click="addNumber">
        {{ number }}
    </button>
</template>

<script>
export default {
    name: 'NumberButton',
    props: {
        number: [Number, String],
        expression: Array,
        result: String,
    },
    emits: ['update:expression', 'update:result'],
    computed: {
        order() {
            if (this.number === 0 || this.number === '.') {
                return 'order: 3';
            } else if (this.number < 4) {
                return 'order: 2';
            } else if (this.number < 7) {
                return 'order: 1;';
            }
        },
    },
    methods: {
        isNumber(value) {
            return !isNaN(value);
        },
        canAddPoint() {
            let lastCharacter = this.expression.slice(-1)[0];
            let lastNotNumberChar;
            for (let character of this.expression) {
                if (character !== lastCharacter && !this.isNumber(character)) {
                    lastNotNumberChar = character;
                }
            }
            return this.isNumber(lastCharacter) && lastNotNumberChar !== '.';
        },
        addNumber() {
            if (this.number === '.' && this.canAddPoint() === false) {
                return;
            }
            if (this.expression.includes('=') && this.number !== '.') {
                this.$emit('update:expression', [this.number]);
                this.$emit('update:result', '');
            } else {
                this.$emit('update:expression', [
                    ...this.expression,
                    this.number,
                ]);
            }
        },
    },
};
</script>

<style module lang="scss">
@import '@/assets/scss/components/button';

.number-button {
    @extend %btn-sm;
    background-color: #fff;
    &:hover {
        background-color: #e8e8e8;
    }
}
</style>
