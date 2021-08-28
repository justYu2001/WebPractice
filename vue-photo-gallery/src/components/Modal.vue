<template>
    <div class="modal" v-if="isShow" @click.self="close">
        <div class="modal-body">
            <img :src="photoUrl" alt="photo">
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: "Modal",
    setup() {
        const photoUrl = inject("photoUrl");

        const isShow = inject("isShow");
        isShow.value = true;
        const close = () => isShow.value = false;

        return {
            photoUrl,
            isShow,
            close,
        }
    },
}
</script>

<style lang="scss" scoped>
.modal{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(33, 33, 33, 0.46);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-body{
    width: 500px;
}
</style>