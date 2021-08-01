<template>
    <div :class="$style.tabs">
        <div
            v-for="tab in tabs"
            :class="[$style.tab, { [$style.active]: tab === condition }]"
            @click="$emit('update:condition', tab)"
        >
            {{ tab }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    props: {
        condition: String,
    },
    emits: ['update:condition'],
    data() {
        return {
            tabs: ['所有任務', '未完成', '已完成'],
        };
    },
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
