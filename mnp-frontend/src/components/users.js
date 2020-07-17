class Users{
    constructor(){
        this.users = []
        this.adapter = new UsersAdapter()
        this.initBindingAndEventListners()
        this.fetchAndLoadUsers()
    }
    initBindingAndEventListners(){
        this.usersContainer = document.getElementById('users-container')
        this.newUserName = document.getElementById('new-user-name')
        this.newUserEmail = document.getElementById('new-user-email')
        this.newUserPassword = document.getElementById('new-user-password')
        this.userForm = document.getElementById('new-user-form')
        this.userForm.addEventListener('submit', this.createUser.bind(this))
    }

    createUser(e){
        e.preventDefault()
        const name = this.newUserName.value
        const email = this.newUserEmail.value
        const password = this.newUserPassword.value
        this.adapter.createUser(name,email,password).then(user=> {
            this.users.push(new User(user))
            this.newUserName.value = ''
            this.newUserEmail.value = ''
            this.newUserPassword.value = ''
            this.render()
        })
    }

    fetchAndLoadUsers(){
        this.adapter
        .getUsers()
        .then(users => {
            users.forEach(user => this.users.push(new User(user))) 
        })
        .then(()=>{
            this.render()
        }) 
    }

    render(){
        this.usersContainer.innerHTML = this.users.map(user => user.renderLi()).join('')
    }
}