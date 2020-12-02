import UserData from '../../services/UserData';

export default {
    actions: {
        fetchUsers({ commit, rootState, dispatch}) {
            UserData.getPage(rootState.common.currentPage)
            .then(json => {
                const users = json.data.rows
                commit('updateUsers', users)
                dispatch('getUserMaxPageFromServer')
            })
        },
        fetchUsersNoPagination({ commit, }) {
            UserData.getAll()
            .then(json => {
                const users = json.data
                commit('updateUsers', users)
            })
        },
        getUserMaxPageFromServer({commit}) {
            UserData.getAmount()
            .then(json => {
                const users = json.data
                commit('updateMaxPage', users)
            })
        },
        createUser({ commit, dispatch }, newUser, users, ) {
            UserData.create(newUser)
            .then(() => {
                dispatch('fetchUsers')
                .then(() => {commit('updateUsers', users)})
                
            })
        },
        deleteUser({commit, dispatch}, userToDelete, users) {
            UserData.delete(userToDelete)
            .then(() => {
                dispatch('fetchUsers')
                .then(()=>{commit('updateUsers', users)})
            })
        },
        updateUser({commit, dispatch}, userToUpdate, users) {
            UserData.update(userToUpdate.login, userToUpdate.formData)
            .then(() => {
                dispatch('fetchUsers')
                .then(() => {
                    commit('updateUsers', users)
                })
            })
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
    },
    state: {
        users: [],
    },
    getters: {
        allUsers(state) {
            return state.users
        },
    },
}