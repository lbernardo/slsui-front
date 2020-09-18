import Vue from 'vue'
import Vuex from 'vuex'
import lambda from "./lambda";
import dynamodb from "./dynamodb";
import sqs from "./sqs";
import appBuild from "@/api/build";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    provider: {
      name: "",
      region: "us-east-1",
      runtime: null,
      memorySize: 1024,
      timeout: 30
    },
    yaml: ""
  },
  mutations: {
    setYaml(state, content) {
      state.yaml = content;
    }
  },
  actions: {
    build({state, commit}) {
      const {provider, lambda, dynamodb, sqs} = state;
      const data = {
        provider,
        lambda: lambda.functions,
        dynamodb: dynamodb.databases,
        sqs: sqs.queues
      }
      appBuild.build(data).then(data => {
        commit("setYaml", data);
      })
    }
  },
  modules: {
    lambda,
    dynamodb,
    sqs,
  }
})
