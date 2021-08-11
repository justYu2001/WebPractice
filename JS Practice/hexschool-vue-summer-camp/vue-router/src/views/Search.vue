<template>
    <p>search text:{{ text }}</p>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Search",
    props: {
        query: String,
    },
    setup(props) {
        return {
            text: props.query,
        };
    },
};
</script>
