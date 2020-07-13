class Users{
    constructor(){
        this.users = []
        this.adapter = new UsersAdapter()
        // this.bindEventListners()
        this.fetchAndLoadUsers()
    }

    fetchAndLoadUsers(){
        this.adapter
        .getUsers()
        .then(users => {
            return console.log(users)
        })
        .then(()=>{
            this.render()
        }) 
    }

    render(){
        console.log('rendering..')
    }
}