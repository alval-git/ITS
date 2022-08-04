
export default function isAuthenticated() {
        let isAuth = false
        const token = localStorage.getItem('access_token')

        if (token) {
            isAuth = true
        }
        return isAuth
    
}