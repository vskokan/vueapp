import AuthData from '../../services/AuthData'

export default {
    actions: {
        login({commit,}, user) { 
            // const data = {
            //     user: user,
            //     userAgent: window.navigator.userAgent // При входе нужно отслеживать устройство входа
            // }
            AuthData.login(user)
            .then((response) => {
                if (response.status === 400) { // Сервер отправит код 400, если пользователь не существует в системе, либо введен неверный пароль
                    commit('updateServerResponse', 'Неверный логин или пароль')
                } else {
                    commit('updateServerResponse', 'Успешный вход в систему') // Если пройдены проверки логина и пароля, сервер пришлет данные
                    const currentUser = response.data.user //Данные пользователя в принципе можно тоже хранить в локальном хранилище, пока пусть будет просто в Vuex
                    //const refreshToken = response.data.refreshToken // refreshToken храним в локальном хранилише, accessToken будет в http-only куках
                    //localStorage.setItem('refreshToken', refreshToken)

                    console.log(response.data)
                    commit('updateCurrentUser', currentUser)
                    
                }
            })
        },
        logout({commit,}) {
            // const data = {
            //     user: user,
            //     userAgent: window.navigator.userAgent,
            // }
            AuthData.logout()
            .then((response) => {
                let serverResponse
                switch (response.status) {
                    case 200: serverResponse = 'Выход выолнен корректно'; break
                    case 500: serverResponse = 'Ошибка на сервере'; break
                }
                commit('updateServerResponse', serverResponse)
                commit('cleanUserData')
            })
        },
        checkSessionStatus({commit,}) {
            const data = {
                message: 'checkSession',
                //refreshToken: localStorage.getItem('refreshToken')
            }
            AuthData.checkSession(data)
            .then((response) => {
                if (response.status === 200) {
                    //localStorage.setItem('refreshToken', response.data.refreshToken)
                    commit('updateCurrentUser', response.data.user)
                }
            })
        }
    },
    mutations: {
        updateCurrentUser(state, currentUser) {
            state.user = currentUser
            state.auth = true
        },
        updateServerResponse(state, response) {
            state.serverResponse = response
        },
        cleanUserData(state) {
            state.auth = false,
            state.user.login = ''
            state.user.email = ''
            state.user.name = ''
            state.user.location = ''
            state.user.avatar = ''
            state.user.raiting = ''
            state.user.admin = false

            //localStorage.setItem('refreshToken', null)
        }
    },
    state: {
        auth: false,
        user: {
            login: '',
            email: '',
            name: '',
            location: '',
            avatar: '',
            raiting: '',
            admin: false
        },
        // refreshToken: localStorage.getItem('refreshToken'),
        serverResponse: ''
    },
    getters: {
        isAuth(state) {
            return state.auth
        },
        isAdmin(state) {
            return state.user.admin
        },
        currentUser(state) {
            return state.user
        },
        serverResponse(state) {
            return state.serverResponse
        }
    }
}