export default {
    namespaced: true,
    state: () => ({
        functions: []
    }),
    mutations: {
        addFunction(state, fn) {
            state.functions.push(fn);
        },
        editFunction(state, obj) {
            state.functions[obj.index] = obj.data;
        },
        removeFunction(state, index) {
            state.functions.splice(index, 1);
        }
    },
    actions: {
        addFunction({commit}, fn) {
            commit("addFunction", fn);
        },
        editFunction({commit}, obj) {
            commit("editFunction", obj);
        },
        removeFunction({commit}, index) {
            commit("removeFunction", index);
        }
    }
}