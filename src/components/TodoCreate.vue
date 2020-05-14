<template>
  <div>
    <label for="todo-text">New To-Do</label>
    <input id="todo-text" v-model="text"/>
    <input type="submit" value="Add To-Do" v-on:submit="() => createTodo(text)" />
  </div>
</template>

<script>
export default {
  name: 'TodoCreate',
  data: () => ({
    text: '',
  }),
  props: {
    createTodo: Function,
  }
}
</script>

<style scoped>

</style>
