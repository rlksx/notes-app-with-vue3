import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    notebook: [],
  },
  getters: {},
  mutations: {
    storeNotebook(state, payload) {
      state.notebook = payload;
    },
    storeNote(state, payload) {
      const index = state.notebook.findIndex((todo) => todo.id === payload.id);

      if (index >= 0) {
        state.notebook.splice(index, 1, payload);
      } else {
        state.notebook.push(payload);
      }
    },
  },
  actions: {
    getNotebook({ commit }) {
      return new Promise(() => {
        return axios
          .get("http://localhost:3000/notebook")
          .then((response) => commit("storeNotebook", response.data));
      });
    },

    putNote({ commit }, { id, data }) {
      return axios
        .put(`http://localhost:3000/notebook/${id}`, data)
        .then((response) => commit("storeNote", response.data));
    },

    pushNote({ commit }, data) {
      const response = axios
        .post("http://localhost:3000/notebook", data)
        .then((response) => {
          commit("storeNote", response.data);
        });
    },
  },
  modules: {},
});
