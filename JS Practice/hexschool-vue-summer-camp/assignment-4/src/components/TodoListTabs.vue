<template>
    <div :class="$style.tabs">
        <div
            v-for="tab in tabs"
            :key="tab"
            :class="[$style.tab, { [$style.active]: tab === condition }]"
            @click="updateCondition(tab)"
        >
            {{ tab }}
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    name: 'TodoListTabs',
    props: {
        condition: String,
    },
    emits: ['update:condition'],
    setup(props, { emit }) {
        const tabs = ref(['所有任務', '未完成', '已完成']);
        const condition = computed(() => props.condition);

        const updateCondition = (tab) => emit('update:condition', tab);

        return{
            tabs,
            condition,
            updateCondition,
        }
    }
};
</script>

<style module lang="scss">
.tabs {
    display: flex;
}

.tab {
    color: $lightDark;
    font-size: $tab-font-size;
    font-weight: bold;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
}

.active {
    color: #fff;
    background-color: $primary;
    &:hover {
        background-color: $primary;
    }
}
</style>
