import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos(state) {
    return state.todos;
  }
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false
      }
    );

    commit("addTodo", response.data);
  }
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
