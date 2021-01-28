import http from '../http-common' // Импотируем методы axios для отправки запросов на сервер

class AuthData {
    login(data) {
        return http.post(`au/login`, data) // В data будем помещать такие данные, как ip, user-agent и refreshToken
    }

    logout(data) {
        return http.post(`au/logout`, data) // С data аналогично
    }

    checkSession(data) {
        return http.post('au/verify', data)
    }
}

export default new AuthData() // Экспортируем данный класс для использования его методов в Vuex