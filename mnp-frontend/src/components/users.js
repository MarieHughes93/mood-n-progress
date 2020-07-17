class Users{
    constructor(){
        this.users = []
        this.adapter = new UsersAdapter()
        this.initBindingAndEventListners()
    }
    
    initBindingAndEventListners(){
        this.usersContainer = document.getElementById('users-container')
        this.newUserName = document.getElementById('new-user-name')
        this.userForm = document.getElementById('new-user-form')
        this.userForm.addEventListener('submit', this.createUser.bind(this))
    }
    createUser(e){
        e.preventDefault()
        const name = this.newUserName.value
        this.adapter.createUser(name,username).then(user=> {
            this.users.push(new User(user))
            this.newUserName.value = ''
        })
    }

}