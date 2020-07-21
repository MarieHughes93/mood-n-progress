// the app we create a new instance of in index.js which will then create new instance of Users
class AppController{
    constructor() {
        this.current_user = ''
        this.loginListner()
        this.users = new Users()
        this.notes = new Notes()
        this.adapter = new ClassAdaptor
    }

    // listen for login
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
            this.usersContainer = document.getElementById('users-container').style.display = "none";
            this.notesContainer = document.getElementById('notes-container').style.display = "block";
            this.noteCreateContainer = document.getElementById('notes-create').style.display = "block";
            this.notesShowContainer = document.getElementById('notes-show').style.display = "block";
            this.noteId = document.getElementById('add-user-id')
            this.noteId.value = `${this.current_user.id}`
        })
    }
    

 
}



// active highlight
// document.getElementById("menu_").className = "menu__item menu__item--active"
// deactivate highlight
// document.getElementById("menu_").className = "menu__item"
