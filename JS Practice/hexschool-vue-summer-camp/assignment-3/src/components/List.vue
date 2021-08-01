<template>
    <Dialog
        v-show="dialogShow"
        v-model:isShow="dialogShow"
        @ok="clearAllTasks"
    ></Dialog>
    <div :class="$style.function">
        <Tabs v-model:condition="condition"></Tabs>
        <button :class="$style.clear" @click="dialogShow = true">
            清除所有任務
        </button>
    </div>
    <h3 :class="$style.title">有{{ taskLists.length }}筆任務</h3>
    <ul>
        <li :class="$style.list" v-for="task in taskLists" :key="task.id">
            <div
                :class="[
                    $style.check,
                    { [$style.completed]: task.isCompleted },
                ]"
                @click="toggleCheck(task)"
            >
                <svg :class="$style['check-icon']" v-show="task.isCompleted">
                    <use xlink:href="#check" />
                </svg>
            </div>
            <div
                :class="[
                    $style.content,
                    { [$style.completed]: task.isCompleted },
                ]"
            >
                <div @click="toggleCheck(task)" v-show="!task.isEditing">
                    {{ task.content }}
                </div>
                <input
                    :class="$style.input"
                    v-model="task.content"
                    v-show="task.isEditing"
                    @blur="editTask(task.id)"
                    autocomplete="off"
                />
            </div>
            <button :class="$style.edit" @click="focusInput($event, task)">
                <svg :class="$style['pen-icon']"><use xlink:href="#pen" /></svg>
            </button>
            <button :class="$style.delete" @click="deleteTask(task.id)">
                <svg :class="$style['x-icon']"><use xlink:href="#x" /></svg>
            </button>
        </li>
    </ul>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
import Dialog from '@/components/Dialog.vue';

import '@/assets/images/x.svg';
import '@/assets/images/check.svg';
import '@/assets/images/pen.svg';

export default {
    name: 'List',
    components: {
        Tabs,
        Dialog,
    },
    props: {
        tasks: Array,
    },
    emits: ['update:tasks'],
    data() {
        return {
            condition: '所有任務',
            dialog: false,
            dialogShow: false,
        };
    },
    computed: {
        taskLists() {
            switch (this.condition) {
                case '未完成':
                    return this.tasks.filter(
                        (task) => task.isCompleted === false
                    );
                    break;
                case '已完成':
                    return this.tasks.filter(
                        (task) => task.isCompleted === true
                    );
                    break;
                default:
                    return this.tasks;
                    break;
            }
        },
    },
    methods: {
        toggleCheck(task) {
            task.isCompleted = !task.isCompleted;
            window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        focusInput(event, task) {
            task.isEditing = true;
            this.$nextTick(() => {
                event.currentTarget.parentNode.querySelector('input').focus();
            });
        },
        editTask(id) {
            const index = this.tasks.findIndex((task) => task.id === id);
            this.tasks[index].isEditing = false;
            this.tasks[index].id = `${this.tasks[index].content}-${index}`;
            window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        deleteTask(id) {
            const tasks = this.tasks.filter((task) => task.id !== id);
            this.$emit('update:tasks', tasks);
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
        },
        clearAllTasks(val) {
            if (val) {
                this.$emit('update:tasks', []);
                window.localStorage.setItem('tasks', JSON.stringify([]));
            }
        },
    },
};
</script>

<style module lang="scss">
@import '@/assets/scss/components/button';
@import '@/assets/scss/components/input';

.function {
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    padding-bottom: 10px;
    padding-left: 10px;
    font-size: $h3-font-size;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
}

.clear {
    @extend %btn;
    background-color: $primary;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
        background-color: darken($color: $primary, $amount: 10%);
    }
}

.list {
    background-color: #fff;
    padding: 10px;
    display: flex;
    &:hover {
        .delete,
        .edit {
            display: flex;
        }
    }
}

.check {
    width: 20px;
    height: 20px;
    margin: 5px 0;
    border: 1px solid $primary;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &.completed {
        background-color: $primary;
    }
}

.check-icon {
    color: #fff;
    width: 18px;
    height: 18px;
}

.content {
    flex-grow: 1;
    padding: 1px 10px;
    &.completed {
        text-decoration: line-through;
        color: #808080;
    }

    div {
        padding: 5px 0;
        cursor: pointer;
    }

    .input {
        @extend %input;
        width: 40%;
        font-size: $input-sm-font-size;
        height: $input-sm-font-size;
        padding: 5px 0;
        box-shadow: 0 1px 0 0 $primary;
    }
}

.delete {
    @extend %btn;
    background-color: transparent;
    display: none;
    align-items: center;
    &:hover svg {
        color: $red;
    }
}

.edit {
    @extend %btn;
    background-color: transparent;
    display: none;
    align-items: center;
    padding: 0;
    &:hover svg {
        color: $primary;
    }
}

.x-icon {
    width: 30px;
    height: 30px;
    color: #808080;
}

.pen-icon {
    width: 16px;
    height: 16px;
    color: #808080;
}
</style>
