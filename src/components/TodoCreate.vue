<template>
  <v-form v-on:submit="onSubmit" ref="todoCreateForm">
    <v-text-field
      v-model="text"
      label="Add To-Do"
      required
    >
    </v-text-field>
    <v-btn icon type="submit">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-form>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'TodoCreate',
    data: () => ({
      valid: false,
      text: '',
    }),
    methods: {
      onSubmit: function(ev) {
        ev.preventDefault();
        this.addToDo(this.text);
        this.$refs.todoCreateForm.reset();
      },
      ...mapActions(['addToDo']),
    }
  }
</script>

<style scoped>
  form {
    display: flex;
    align-items: center;
  }
</style>
