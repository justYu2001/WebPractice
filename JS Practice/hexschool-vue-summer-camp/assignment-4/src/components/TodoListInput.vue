<template>
    <div :class="$style['task-input']">
        <button :class="$style.add" v-show="!isFocus" @click="focusInput">
            <svg :class="$style['plus-icon']"><use xlink:href="#plus" /></svg>
            新增工作
        </button>
        <input
            :class="$style.input"
            type="text"
            ref="input"
            v-model="task"
            v-show="isFocus"
            @keydown.exact.enter="addTask"
            autocomplete="off"
        />
        <div :class="$style['btn-group']">
            <button
                :class="$style['add-task']"
                @click="addTask"
                v-show="isFocus"
            >
                新增
            </button>
            <button :class="$style.cancel" v-show="isFocus" @click="cancel">
                取消
            </button>
        </div>
    </div>
</template>

<script>
import '@/assets/images/plus.svg';

import { ref, nextTick } from 'vue';

export default {
    name: 'TodoListInput',
    props: {
        tasks: Array,
    },
    setup(props) {
        const isFocus = ref(false);
        const task = ref('');
        const input = ref(null);

        const focusInput = () => {
            isFocus.value = true;
            nextTick(() => {
                input.value.focus();
            });
        };

        const cancel = () => {
            isFocus.value = false;
            task.value = '';
        }

        const addTask = () => {
            const newTask = {
                content: task.value,
                isCompleted: false,
                isEditing: false,
                id: `${task.value}-${props.tasks.length}`,
            };
            props.tasks.push(newTask);
            task.value = '';
            isFocus.value = false;
        }

        return{
            isFocus,
            task,
            input,
            focusInput,
            cancel,
            addTask,
        }
    },
};
</script>

<style module lang="scss">
@import '@/assets/scss/components/input';
@import '@/assets/scss/components/button';

.task-input {
    position: relative;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.input {
    @extend %input;
    width: 1180px;
    padding: 9px 10px;
    font-size: $input-lg-font-size;
}

.add {
    width: 100%;
    padding: 5px 0;
    background-color: transparent;
    color: $gray;
    display: flex;
    align-items: center;
    cursor: text;
    font-size: $input-lg-font-size;
    @extend %btn;
}

.plus-icon {
    width: 36px;
    height: 36px;
    color: $primary;
    margin-right: 10px;
    cursor: pointer;
}

.btn-group {
    position: absolute;
    top: 0;
    right: 0;
    button {
        @extend %btn;
        margin-right: 10px;
        font-weight: bold;
        padding: 7px 10px;
        background-color: transparent;
        cursor: pointer;
    }

    .add-task {
        color: $primary;
    }

    .cancel {
        color: $gray;
    }
}
</style>
