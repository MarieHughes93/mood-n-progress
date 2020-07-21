class UsersController{
    constructor(){
        this.users = []
        this.adapter = new ClassAdaptor()
        this.initBindingAndEventListners()
    }
    
    initBindingAndEventListners(){
        this.usersCreateContainer = document.getElementById('users-create')
        this.userForm = document.getElementById('user-create-form') 
        this.newName = document.getElementById('user-create-name')
        this.newUserName = document.getElementById('user-create-username')
        this.userForm.addEventListener('submit', this.createUser.bind(this))
    }
    createUser(e){
        e.preventDefault()
        const name = this.newName.value
        const username = this.newUserName.value
        this.adapter.createUser(name, username).then(user=> {
            this.users.push(new User(user))
            this.usersCreateContainer = document.getElementById('users-create').style.display = "none";
        })
    }

}