<template>
    <h2 :class="$style.title">{{ month }}/{{ date }} 星期{{ day }}</h2>
</template>

<script>
export default {
    name: 'TodoListTitle',
    setup() {
        const dayStringArray = ['日', '一', '二', '三', '四', '五', '六'];

        const today = new Date();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const day = dayStringArray[today.getDay()];

        return{
            month,
            date,
            day,
        }
    },
};
</script>

<style module lang="scss">
.title {
    font-size: $h2-font-size;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>
