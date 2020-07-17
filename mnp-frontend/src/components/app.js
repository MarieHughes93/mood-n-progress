// the app we create a new instance of in index.js which will then create new instance of Users
class App{
    constructor() {
        this.current_user = ''
        this.users = new Users()
        this.loginListner()
        this.adapter = new UsersAdapter
    }

    loginListner(){
        this.loginContainer = document.getElementById('user-login-form')
        this.loginUserName = document.getElementById('user-login-username')
        this.loginForm = document.getElementById('user-login-form')
        // this bind on 14 is for us to be speaking of the app instead of the login form.
        this.loginForm.addEventListener('submit', this.login.bind(this))
    }
    login(e){
        e.preventDefault()
        const userName = this.loginUserName.value
        this.adapter.login(userName).then(user=> {
            this.current_user = new User(user)
            this.UserContainer = document.getElementById('users-container')
            this.UserContainer.style.display = "none";
        })
    }

 
}
