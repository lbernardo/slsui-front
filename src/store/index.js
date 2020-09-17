import Vue from 'vue'
import Vuex from 'vuex'
import lambda from "./lambda";
import dynamodb from "./dynamodb";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    provider: {
      name: "",
      region: "us-east-1",
      runtime: null,
      memorySize: 1024,
      timeout: 30
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    lambda,
    dynamodb,
  }
})
