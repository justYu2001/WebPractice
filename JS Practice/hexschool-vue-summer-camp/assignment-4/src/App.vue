<template>
  <TodoList />
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList,
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/base/reset';
</style>
