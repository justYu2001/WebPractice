<template>
    <section class="gallery">
        <Photo 
            v-for="photo in photos" 
            :id="photo.id" 
            :height="photo.height" 
            :width="photo.width" 
        />
    </section>
</template>

<script>
import Photo from '@/components/Photo.vue';

import { ref } from 'vue';

export default {
    name: "Gallery",
    components: {
        Photo,
    },
    setup() {
        const randomNumber = (limit) => {
            return Math.floor(Math.random() * limit) +1;
        }

        const photos = ref([]);
        photos.value = Array.from({ length: 75 }, () => ({
            id: randomNumber(12),
        }));
        photos.value.forEach((photo, index) => {
            if(index < 50){
                photo.height = randomNumber(4);
                photo.width = randomNumber(4);
            } else {
                photo.height = 1;
                photo.width = 1;
            }
        });

        return {
            photos,
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery{
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-auto-rows: 100px;
    grid-auto-flow: dense;
    justify-content: center;
    padding: 20px 0;
    background-color: $primary;
}
</style>