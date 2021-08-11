<template>
    <div class="about">This is an {{ text }} page</div>
</template>

<script>
export default {
    name: "About",
    props: {
        text: String,
    },
    setup(props) {
        return {
            text: props.text,
        };
    },
};
</script>

<style scoped>
.about {
    border: 1px solid #000;
}
</style>
