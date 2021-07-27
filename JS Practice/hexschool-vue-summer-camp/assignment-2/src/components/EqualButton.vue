<template>
    <button :class="$style['equal-button']" @click="displayResult">=</button>
</template>

<script>
import BigNumber from 'bignumber.js'; //處理浮點數運算精度問題

BigNumber.config({
    EXPONENTIAL_AT: [-7, 7],
    DECIMAL_PLACES: 7,
    FORMAT: {
        decimalSeparator: '',
    },
});

export default {
    name: 'EqualButton',
    props: {
        expression: Array,
        result: [String, Number],
        displayExpression: String,
    },
    emits: ['update:expression', 'update:result'],
    inject: ['history'],
    methods: {
        getPriority(character) {
            if (character === '*' || character === '/') {
                return 2;
            } else if (character === '+' || character === '−') {
                return 1;
            } else {
                return 0;
            }
        },
        top(stack) {
            return stack.slice(-1)[0];
        },
        caculate(a, b, operator) {
            switch (operator) {
                case '+':
                    return a.plus(b);
                case '−':
                    return a.minus(b);
                case '*':
                    return a.times(b);
                default:
                    return a.div(b);
            }
        },
        rpn() {
            let numberStack = [];
            let operatorStack = [];
            let expression = [];
            const length = this.expression.length;
            for (let i = 0; i < length; i++) {
                let numberString = '';
                let character = this.expression[i];
                while (i < length && this.getPriority(character) === 0) {
                    numberString += character;
                    character = this.expression[++i];
                }
                expression.push(new BigNumber(numberString));
                const operatorPriority = this.getPriority(character);
                let topPriority = this.getPriority(this.top(operatorStack));
                while (
                    operatorStack.length > 0 &&
                    operatorPriority <= topPriority
                ) {
                    const operator = operatorStack.pop();
                    expression.push(operator);
                    topPriority = this.getPriority(this.top(operatorStack));
                }
                if (character) {
                    operatorStack.push(character);
                }
            }
            operatorStack.reverse();
            expression = [...expression, ...operatorStack];
            return expression;
        },
        rpnEval() {
            let expression = this.rpn();
            let stack = [];
            stack.push(expression.shift());
            stack.push(expression.shift());
            while (expression.length > 0) {
                let item = expression.shift();
                if (this.getPriority(item) > 0) {
                    let num1 = stack.pop();
                    let num2 = stack.pop();
                    let ans = this.caculate(num2, num1, item);
                    stack.push(ans);
                } else {
                    stack.push(item);
                }
            }
            return stack[0];
        },
        displayResult() {
            this.$emit('update:expression', [...this.expression, '=']);
            const result = this.rpnEval();
            let displayResult = result.toString();
            if (displayResult.length > 7) {
                displayResult = result.toPrecision(4);
            }
            if (!result.isFinite()) {
                this.$emit('update:result', '∞');
            } else if (result.isNaN()) {
                this.$emit('update:result', '錯誤');
            } else {
                this.$emit('update:result', displayResult);
            }
            if (this.history.value.length === 10) {
                this.history.value.shift();
            }
            this.history.value.push(
                `${this.displayExpression} = ${displayResult}`
            );
            window.localStorage.setItem('history', this.history.value);
        },
    },
};
</script>

<style module lang="scss">
@import '@/assets/scss/components/button';

.equal-button {
    @extend %btn-sm;
    color: #fff;
    background-color: $primary;
    order: 3;
    &:hover {
        background-color: darken($color: $primary, $amount: 10%);
    }
}
</style>
