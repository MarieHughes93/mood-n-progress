// the app we create a new instance of in index.js which will then create new instance of Users
class App{
    constructor() {
        this.current_user = ''
        this.users = new Users()
        this.loginListner()
        this.adapter = new UsersAdapter
    }

    loginListner(){
        this.loginContainer = document.getElementById('login-container')
        this.loginEmail = document.getElementById('login-user-email')
        this.loginPassword = document.getElementById('login-user-password')
        this.loginForm = document.getElementById('login-form')
        // this bind on 14 is for us to be speaking of the app instead of the login form.
        this.loginForm.addEventListener('submit', this.login.bind(this))
    }
    login(e){
        e.preventDefault()
        const email = this.loginEmail.value
        this.adapter.login(email).then(user=> {
            this.current_user = new User(user)
            this.newUserContainer = document.getElementById('new-user-container')
            this.loginContainer = document.getElementById('login-container')
            this.loginContainer.value = ''
            this.newUserContainer.value = ''
        })
    }

 
}