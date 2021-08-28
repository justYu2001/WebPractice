<template>
  <Modal />
  <Gallery />
</template>

<script>
import Gallery from '@/components/Gallery.vue';
import Modal from '@/components/Modal.vue';

import { ref, provide } from 'vue'

export default {
  name: 'App',
  components: {
    Gallery,
    Modal,
  },
  setup() {
    const isShow = ref(false);
    provide("isShow", isShow);

    const photoUrl = ref("");
    provide("photoUrl", photoUrl);
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/base/reset";
</style>
