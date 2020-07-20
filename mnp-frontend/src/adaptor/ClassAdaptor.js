class ClassAdaptor{
    constructor(){
        this.userBaseUrl = 'http://localhost:3000/api/v1/users'
        this.noteBaseUrl = 'http://localhost:3000/api/v1/notes'
        this.loginUrl = 'http://localhost:3000/api/v1/login/'
        }

        // fetch data
        getUsers(){
            return fetch(this.userBaseUrl).then(res => res.json()
            )
        }
        getNotes(){
            return fetch(this.noteBaseUrl).then(res=>res.json()
            )
        }

        // seesion data
        login(value) {
            const user = {
                username: value,
            }
            return fetch(this.loginUrl + user.username).then(res=> res.json())
        }
        logout(value){

        }

        // Create
        createUser(name,username) {
        
            const user = {
                name: name,
                username: username,
            }
            return fetch(this.userBaseUrl,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({user}),
            }).then(res=> res.json())
        }

        createNote(title,content,userId) {
            const note = {
                title: title,
                content: content,
                user_id: userId,
            }
            return fetch(this.noteBaseUrl,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({note}),
            
            }).then(
                res=> res.json())
        }

        // Update

        // Destroy
}