import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [
      { text: 'Clean room', done: true },
      { text: 'Do the dishes', done: false },
      { text: 'Walk the dog', done: false },
    ]
  },
  mutations: {
    TODO_CREATE(state, text) {
      state.todos.push({text, done: false})
    },
    TODO_UPDATE(state, { index, ...update }) {
      state.todos[index] = {
        ...state.todos[index],
        ...update
      };
      state.todos = [ ...state.todos ];
    }
  },
  actions: {
    addToDo({ commit }, text) {
      commit('TODO_CREATE', text)
    },
    toggleToDo({ commit, state }, index) {
      commit('TODO_UPDATE', {
        index,
        done: !state.todos[index].done
      });
    },
  }
});
