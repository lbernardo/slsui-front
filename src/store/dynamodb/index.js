export default {
    namespaced: true,
    state: () => ({
        databases: []
    }),
    mutations: {
        addDatabase(state, db) {
            state.databases.push(db);
        },
        editDatabase(state, obj) {
            state.databases[obj.index] = obj.data;
        },
        removeDatabase(state, index) {
            state.databases.splice(index, 1);
        }
    },
    actions: {
        addDatabase({commit}, db) {
            commit("addDatabase", db);
        },
        editDatabase({commit}, obj) {
            commit("editDatabase", obj);
        },
        removeDatabase({commit}, index) {
            commit("removeDatabase", index);
        }
    }
}