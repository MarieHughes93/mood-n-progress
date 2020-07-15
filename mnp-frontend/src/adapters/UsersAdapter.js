// only job is to communicate with api. The middle man. Take from api and give to front in. 
class UsersAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/v1/users'
    }

    getUsers(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}
