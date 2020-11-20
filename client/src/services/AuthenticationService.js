import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('authentication', credentials)
    }
}


// How this would  be used

// AuthenticationService.register({
//     email: 'test@gmail.com',
//     password: '123456'
// })