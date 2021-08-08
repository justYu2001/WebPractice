<template>
    <li :class="$style.list">
        <div
            :class="[$style.check, { [$style.completed]: task.isCompleted }]"
            @click="toggleCheck(task)"
        >
            <svg :class="$style['check-icon']" v-show="task.isCompleted">
                <use xlink:href="#check" />
            </svg>
        </div>
        <div
            :class="[$style.content, { [$style.completed]: task.isCompleted }]"
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
</template>

<script>
import "@/assets/images/x.svg";
import "@/assets/images/check.svg";
import "@/assets/images/pen.svg";

import { watch, nextTick } from "vue";

export default {
    name: "TodoListItem",
    props: {
        task: Object,
        tasks: Array,
    },
    setup(props) {
        const toggleCheck = () => {
            props.task.isCompleted = !props.task.isCompleted;
        };

        const focusInput = (event) => {
            props.task.isEditing = true;
            nextTick(() => {
                event.currentTarget.parentNode.querySelector("input").focus();
            });
        };

        const editTask = (id) => {
            const index = props.tasks.findIndex((task) => task.id === id);
            props.tasks[index].isEditing = false;
            props.tasks[index].id = `${props.tasks[index].content}-${index}`;
        };

        const deleteTask = (id) => {
            const index = props.tasks.findIndex((task) => task.id === id);
            props.tasks.splice(index, 1);
        };

        watch(
            props.task,
            () => {
                window.localStorage.setItem(
                    "tasks",
                    JSON.stringify(props.tasks)
                );
            },
            {
                deep: true,
            }
        );

        return {
            toggleCheck,
            focusInput,
            editTask,
            deleteTask,
        };
    },
};
</script>

<style module lang="scss">
@import "@/assets/scss/components/button";
@import "@/assets/scss/components/input";

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
