// the app we create a new instance of in index.js which will then create new instance of Users
class App{
    constructor() {
        this.current_user = ''
        this.users = new Users()
    }

    loginListner(){
        this.loginContainer = document.getElementById('login-container')
        this.loginEmail = document.getElementById('login-user-email')
        this.loginPassword = document.getElementById('login-user-password')
        this.loginForm = document.getElementById('new-user-form')
        this.loginForm.addEventListener('submit', this.login.bind(this))
    }
    login(e){
        e.preventDefault()
        const email = this.loginEmail.value
        const password = this.loginPassword.value
        this.adapter.login(email,password).then(user=> {
            this.current_user = user
            this.newUserContainer = document.getElementById('new-user-container')
            this.loginContainer = document.getElementById('login-container')
            this.loginContainer.value = ''
            this.newUserContainer.value = ''
            this.render()
        }).bind(this)
    }

 
}