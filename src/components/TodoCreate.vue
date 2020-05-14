<template>
  <form v-on:submit="onSubmit" ref="todoCreateForm">
    <label for="todo-text">New To-Do</label>
    <input id="todo-text" v-model="text"/>
    <input type="submit" value="Add To-Do" />
  </form>
</template>

<script>
  export default {
    name: 'TodoCreate',
    data: () => ({
      text: '',
    }),
    methods: {
      onSubmit: function(ev) {
        ev.preventDefault();
        this.$parent.createTodo(this.text);
        this.$refs.todoCreateForm.reset();
      }
    }
  }
</script>

<style scoped>

</style>
