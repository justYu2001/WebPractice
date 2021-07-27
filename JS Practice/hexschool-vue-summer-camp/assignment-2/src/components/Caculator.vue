<template>
    <div :class="$style.container">
        <div :class="$style.caculator">
            <div :class="$style.result">
                <p :class="$style.expression">{{ expression }}</p>
                <p :class="$style.number">{{ result }}</p>
            </div>
            <div :class="$style['button-group']">
                <ClearButton
                    v-model:expression="expressionArray"
                    v-model:result="result"
                ></ClearButton>
                <DeleteButton
                    v-model:expression="expressionArray"
                    v-model:result="result"
                ></DeleteButton>
                <NumberButton
                    v-for="number in 9"
                    :number="number"
                    v-model:expression="expressionArray"
                    v-model:result="result"
                ></NumberButton>
                <NumberButton
                    :number="0"
                    v-model:expression="expressionArray"
                    v-model:result="result"
                ></NumberButton>
                <NumberButton
                    number="."
                    v-model:expression="expressionArray"
                ></NumberButton>
                <EqualButton
                    v-model:expression="expressionArray"
                    v-model:result="result"
                    :displayExpression="expression"
                ></EqualButton>
                <OperatorButton
                    v-for="operator in operators"
                    :operator="operator"
                    :key="operator"
                    v-model:expression="expressionArray"
                    v-model:result="result"
                ></OperatorButton>
            </div>
        </div>
    </div>
</template>

<script>
import NumberButton from '@/components/NumberButton.vue';
import OperatorButton from '@/components/OperatorButton.vue';
import EqualButton from '@/components/EqualButton.vue';
import ClearButton from '@/components/ClearButton.vue';
import DeleteButton from '@/components/DeleteButton.vue';

export default {
    name: 'Cauculator',
    data() {
        return {
            result: '',
            operators: ['/', '*', '−', '+'],
            expressionArray: [],
            num1: 0,
            num2: 0,
        };
    },
    components: {
        NumberButton,
        OperatorButton,
        EqualButton,
        ClearButton,
        DeleteButton,
    },
    computed: {
        expression() {
            let expression = [];
            const length = this.expressionArray.length;
            for (let i = 0; i < length; i++) {
                let character = this.expressionArray[i];
                let numberString = '';
                while (i < length && (!isNaN(character) || character === '.')) {
                    numberString += character;
                    character = this.expressionArray[++i];
                }
                expression.push(numberString);
                switch (character) {
                    case '*':
                        character = '×';
                        break;
                    case '/':
                        character = '÷';
                        break;
                }
                expression.push(character);
            }
            return expression.join(' ');
        },
    },
};
</script>

<style module lang="scss">
.container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.caculator {
    width: 258px;
}

.result {
    color: #fff;
    background-color: $primary;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 10px 10px 0 0;
}

.expression {
    height: 16px;
    padding: 5px 0;
}

.number {
    font-size: 48px;
    height: 48px;
}

.button-group {
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 13px;
}
</style>
