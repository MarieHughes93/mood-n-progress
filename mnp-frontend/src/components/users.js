class Users{
    constructor(){
        this.users = []
        this.adaptor = new UsersAdapter()
        // this.bindEventListners()
        this.fetchAndLoadUsers()
    }

    fetchAndLoadUsers(){
        this.adaptor.getUsers().then(users => {
            console.log(users)
        })
    }
}