class Users{
    constructor(){
        this.users = []
        this.adapter = new UsersAdapter()
        this.initBindingAndEventListners()
    }
    
    initBindingAndEventListners(){
        this.usersCreateContainer = document.getElementById('users-create')
        this.newUserName = document.getElementById('user-create-username')
        this.userForm = document.getElementById('user-create-form')
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