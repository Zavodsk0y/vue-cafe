import { createStore } from "vuex";
import {stat} from "@babel/core/lib/gensync-utils/fs";

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
  },
  getters: {
    isAuthenticated: state => !!state.token
  },
  mutations: {},
  actions: {},
  modules: {},
});
