<template>
    <div :class="$style.history">
        <h2 :class="$style.title">歷史紀錄</h2>
        <ul>
            <li
                :class="$style.list"
                v-for="(record, index) in history.value"
                :key="`${record}-${index}`"
            >
                {{ record }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'History',
    inject: ['history'],
};
</script>

<style module lang="scss">
.history {
    width: 300px;
    padding: 20px;
    background-color: #fff;
}

.title {
    font-size: $h2-font-size;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
}

.list {
    padding: 15px 0;
    font-size: $list-font-size;
}
</style>
