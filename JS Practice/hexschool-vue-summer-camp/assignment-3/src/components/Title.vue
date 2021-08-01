<template>
    <h2 :class="$style.title">{{ month }}/{{ date }} 星期{{ chineseDay }}</h2>
</template>

<script>
export default {
    name: 'Title',
    data() {
        return {
            month: '',
            date: '',
            day: '',
        };
    },
    computed: {
        chineseDay() {
            const dayStringArray = ['日', '一', '二', '三', '四', '五', '六'];
            return dayStringArray[this.day];
        },
    },
    created() {
        const today = new Date();
        this.month = today.getMonth() + 1;
        this.date = today.getDate();
        this.day = today.getDay();
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
