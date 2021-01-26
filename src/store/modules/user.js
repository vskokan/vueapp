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
        },
        updateUserPassword_AdminPanel({commit, dispatch}, userToUpdate, users) {
            //alert(userToUpdate.formData)
            UserData.updatePassword(userToUpdate.login, userToUpdate.formData)
                .then(() => {
                    dispatch('fetchUsers')
                    .then(() => {
                        commit('updateUsers', users)
                    })
                })
        },
        signIn({commit,}, user) {
            alert('fkekfghlfklf')
            UserData.signIn(user)
            .then((json) => {
                console.log(json)
                const statusCode = json.data.statusCode
                commit('updateServerResponse', statusCode)
                if (statusCode == 200) {
                    const currentUser = json.data.user
                    commit('updateCurrentUser', currentUser)
                }
            })
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
        updateCurrentUser(state, currentUser) {
            state.currentUser.login = currentUser.login
            state.currentUser.admin = currentUser.admin
        },
        updateServerResponse(state, statusCode) {
            state.serverResponse = statusCode
        }
    },
    state: {
        users: [],
        currentUser: {
            login: undefined,
            admin: false
        },
        serverResponse: ''
    },
    getters: {
        allUsers(state) {
            return state.users
        },
        currentUser(state) {
            return state.currentUser
        },
        serverResponse(state) {
            return state.serverResponse
        },
        isAdmin(state) {
            return state.currentUser.admin
        },
        isLogged(state) {
            if (state.currentUser.login !== undefined)
                return true
            
            return false
        }
    },
}