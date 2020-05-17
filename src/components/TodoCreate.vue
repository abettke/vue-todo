<template>
  <form v-on:submit="onSubmit" ref="todoCreateForm">
    <input v-model="text" placeholder="Add new to-do..."/>
    <div v-on:click="onSubmit">+</div>
  </form>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'TodoCreate',
    data: () => ({
      text: '',
    }),
    methods: {
      ...mapActions(['addToDo']),
      onSubmit: function(ev) {
        ev.preventDefault();
        this.addToDo(this.text);
        this.$refs.todoCreateForm.reset();
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }

  input{
    flex: 1 0;
    font-size: 16px;
    border: none;
    border-bottom: .5px solid rgba(0, 0, 0, 0.5);
  }

  div {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    cursor: pointer;
    margin: 0 8px;
    width: 22px;
  }

  div:hover {
    background: rgba(0, 0, 0, .1);
  }
</style>
