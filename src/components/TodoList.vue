<template>
  <ul>
    <li v-for="(todo, index) in todos" v-bind:key="index">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array
  }
}
</script>

<style scoped>

</style>
