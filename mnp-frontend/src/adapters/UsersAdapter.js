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
    createUser(value) {
        const user = {
            name: value,
            email: value,
            password: value,
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
            email: value,
        }
        return fetch(this.loginUrl + user.email).then(res=> res.json())
    }
}

