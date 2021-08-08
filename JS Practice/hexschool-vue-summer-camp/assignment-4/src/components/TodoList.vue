<template>
    <div :class="$style.todo">
        <AppDialog
            v-model:isShow="dialogShow"
            @ok="clearAllTask"
            v-show="dialogShow"
        />
        <TodoListTitle />
        <TodoListInput :tasks="tasks" />
        <div :class="$style.function">
            <TodoListTabs v-model:condition="condition" />
            <button :class="$style.clear" @click="dialogShow = true">
                清除所有任務
            </button>
        </div>
        <h3 :class="$style.title">有{{ taskList.length }}筆任務</h3>
        <ul>
            <TodoListItem
                v-for="task in taskList"
                :key="task.id"
                :tasks="tasks"
                :task="task"
            />
        </ul>
    </div>
</template>

<script>
import AppDialog from "@/components/AppDialog.vue";
import TodoListTitle from "@/components/TodoListTitle.vue";
import TodoListInput from "@/components/TodoListInput.vue";
import TodoListTabs from "@/components/TodoListTabs.vue";
import TodoListItem from "@/components/TodoListItem.vue";

import { ref, reactive, computed, watch } from "vue";

export default {
    name: "TodoList",
    components: {
        AppDialog,
        TodoListTitle,
        TodoListInput,
        TodoListTabs,
        TodoListItem,
    },
    setup() {
        function taskStorage() {
            const tasks = window.localStorage.getItem("tasks");
            if (tasks) {
                return JSON.parse(tasks);
            } else {
                window.localStorage.setItem("tasks", JSON.stringify([]));
                return [];
            }
        }

        const condition = ref("所有任務");
        let tasks = reactive(taskStorage());
        const dialogShow = ref(false);

        const taskList = computed(() => {
            switch (condition.value) {
                case "未完成":
                    return tasks.filter((task) => task.isCompleted === false);
                case "已完成":
                    return tasks.filter((task) => task.isCompleted === true);
                default:
                    return tasks;
            }
        });

        const clearAllTask = () => (tasks.length = 0);

        watch(tasks, (val) => {
            window.localStorage.setItem("tasks", JSON.stringify(val));
        });

        return {
            dialogShow,
            condition,
            tasks,
            taskList,
            clearAllTask,
        };
    },
};
</script>

<style module lang="scss">
@import "@/assets/scss/components/button";

.todo {
    width: 1200px;
    margin: auto;
    margin-top: 60px;
}

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
</style>
