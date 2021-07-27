<template>
    <button
        :style="order"
        :class="$style.['operator-button']"
        @click="addOpreator"
    >
        {{ displayOperator }}
    </button>
</template>

<script>
export default {
    name: 'OpreatorButton',
    props: {
        operator: String,
        expression: Array,
        result: String,
    },
    emits: ['update:expression', 'update:result'],
    computed: {
        displayOperator() {
            switch (this.operator) {
                case '*':
                    return '×';
                case '/':
                    return '÷';
                default:
                    return this.operator;
            }
        },
        order() {
            switch (this.operator) {
                case '+':
                    return 'order: 3;';
                case '−':
                    return 'order: 2;';
                case '*':
                    return 'order: 1;';
                default:
                    return 'order: 0;';
            }
        },
    },
    methods: {
        isOpreater(character) {
            let opreators = ['+', '−', '*', '/'];
            return opreators.includes(character);
        },
        addOpreator() {
            const lastCharacter = this.expression.slice(-1)[0];
            if (this.expression.length === 0 || lastCharacter === '.') {
                return;
            }
            let newExpression;
            if (this.expression.includes('=')) {
                this.$emit('update:result', '');
                newExpression = [this.result, this.operator];
            } else {
                if (this.isOpreater(lastCharacter)) {
                    newExpression = [
                        ...this.expression.slice(0, -1),
                        this.operator,
                    ];
                } else {
                    newExpression = [...this.expression, this.operator];
                }
            }
            this.$emit('update:expression', newExpression);
        },
    },
};
</script>

<style module lang="scss">
@import '@/assets/scss/components/button';

.operator-button {
    @extend %btn-sm;
    background-color: #fff;
    &:hover {
        background-color: #e8e8e8;
    }
}
</style>
