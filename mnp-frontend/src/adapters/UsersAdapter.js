// only job is to communicate with api. The middle man. Take from api and give to front in. 
class UsersAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/users'
        this.loginUrl = 'http://localhost:3000/api/v1/login/'
        }

    getUsers(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
    createUser(name,username) {
        
        const user = {
            name: name,
            username: username,
        }
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({user}),
        }).then(res=> res.json())
    }

    login(value) {
        const user = {
            username: value,
        }
        return fetch(this.loginUrl + user.username).then(res=> res.json())
    }
}

