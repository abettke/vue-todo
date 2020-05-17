<template>
  <ul>
    <li
      v-for="(todo, index) in todos"
      v-bind:key="index"
      v-on:click="toggleToDo(index)"
      v-bind:class="{ completed: todo.done }"
    >
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'TodoList',
    computed: mapState(['todos']),
    methods: mapActions(['toggleToDo'])
  }
</script>

<style scoped>
  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    cursor: pointer;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .completed {
    text-decoration: line-through;
  }
</style>
