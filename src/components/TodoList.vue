<template>
  <ul>
    <li
      v-for="(todo, index) in todos"
      v-bind:key="index"
      v-on:click="toggleTodo(index)"
      v-bind:class="{ completed: todo.done }"
    >
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    toggleTodo: function (index) {
      this.$parent.toggleTodo(index);
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
