<template>
  <main id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>
      Vue To-Do
    </h1>
    <section>
      <TodoCreate />
    </section>
    <section>
      <TodoList v-bind:todos="todos"/>
    </section>
  </main>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoCreate from './components/TodoCreate';

export default {
  name: 'App',
  data: () => ({
    todos: [
      { text: 'Clean room', done: true },
      { text: 'Do the dishes', done: false },
      { text: 'Walk the dog', done: false },
    ]
  }),
  methods: {
    createTodo: function (text) {
      this.todos.push({
        text,
        done: false,
      })
    },
    toggleTodo: function(todoIndex) {
      this.todos[todoIndex].done = !this.todos[todoIndex].done
    }
  },
  components: {
    TodoList,
    TodoCreate
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px;
  }

  section {
    width: 35%;
    margin: 0 auto;
  }
</style>
