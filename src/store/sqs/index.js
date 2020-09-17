export default {
    namespaced: true,
    state: () => ({
        queues: []
    }),
    mutations: {
        addQueue(state, q) {
            state.queues.push(q);
        },
        editQueue(state, obj) {
            state.queues[obj.index] = obj.data;
        },
        removeQueue(state, index) {
            state.queues.splice(index, 1);
        }
    },
    actions: {
        addQueue({commit}, q) {
            commit("addQueue", q);
        },
        editQueue({commit}, obj) {
            commit("editQueue", obj);
        },
        removeQueue({commit}, index) {
            commit("removeQueue", index);
        }
    }
}