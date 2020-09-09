export default {
    namespaced: true,
    state: () => ({
        functions: []
    }),
    mutations: {
        addFunction(state, fn) {
            state.functions.push(fn);
        }
    },
    actions: {
        addFunction({commit}, fn) {
            commit("addFunction", fn);
        }
    }
}