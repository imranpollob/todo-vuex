import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "first todo"
    },
    {
      id: 2,
      title: "second todo"
    }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
