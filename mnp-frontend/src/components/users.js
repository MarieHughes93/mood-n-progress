class Users{
    constructor(){
        this.users = []
        this.adapter = new UsersAdapter()
        this.initBindingAndEventListners()
        this.fetchAndLoadUsers()
    }
    initBindingAndEventListners(){
        this.usersContainer = document.getElementById('users-container')
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