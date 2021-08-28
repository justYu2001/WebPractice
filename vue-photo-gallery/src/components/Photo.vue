<template>
<div :class="`photo h${height} w${width}`">
    <img :src="require(`@/assets/images/${id}.jpg`)" alt="photo">
    <div class="overlay">
        <button class="btn" @click="showModal">View →</button>
    </div>
</div>
</template>

<script>
import { computed, inject } from 'vue'

export default {
    name: "Photo",
    props:  {
        id: Number,
        height: Number,
        width: Number,
    },
    setup(props) {
        const id = computed(() => props.id);
        const height = computed(() => props.height);
        const width = computed(() => props.width);

        const photoUrl = inject("photoUrl");

        const isShow = inject("isShow");
        const showModal = () => {
            isShow.value = true;
            photoUrl.value = require(`@/assets/images/${id.value}.jpg`);
        };

        return {
            id,
            height,
            width,
            showModal,
        }
    }
}
</script>

<style lang="scss" scoped>
.photo{
    display: grid;
    overflow: hidden;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    img{
        width: 100%;
        display: block;
        height: 100%;
        grid-column: 1/-1;
        grid-row: 1/-1;
        object-fit: cover;
    }

    .overlay{
        position: relative;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        display: grid;
        place-items: center center;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-100%);
        transition: .5s;
    }

    &:hover .overlay{
        transform: translateY(0);
    }
}

.btn{
    border: 0;
    color: $white;
    font-weight: bold;
    background: none;
    border: 2px solid $white;
    padding: 5px 10px;
    cursor: pointer;
    &:focus{
        outline: 0;
    }
}

@for $i from 2 through 4 {
    .photo.h#{$i}{
        grid-row: span #{$i};
    }
}

@for $i from 2 through 4 {
    .photo.w#{$i}{
        grid-column: span #{$i};
    }
}
</style>