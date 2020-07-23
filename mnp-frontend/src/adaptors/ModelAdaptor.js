class ModelAdaptor{
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/users/'
        this.noteEnd = "/notes/"
        this.loginUrl = 'http://localhost:3000/api/v1/login/'
        }

        // fetch data 
        readUsersAdaptor(){
            return fetch(this.baseUrl).then(res => res.json()
            )
        }
        // index /api/v1/users/:user_id/notes(.:format)
        readNotesAdaptor(userID){
            const user = {
                id: userID
            }
            return fetch(this.baseUrl + user.id + this.noteEnd).then(res => res.json()
            )
        }

        // seesion /api/v1/login/:username(.:format)  
        loginAdaptor(username) {
            const user = {
                username: username,
            }
            return fetch(this.loginUrl + user.username).then(res=> res.json())
        }


        // Create /api/v1/users(.:format)
        createUserAdaptor(name,username) {
        
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

        // create note /api/v1/users/:user_id/notes(.:format)      
        createNoteAdaptor(title,content,userId) {
            const note = {
                title: title,
                content: content,
                user_id: userId,
            }
            return fetch(this.baseUrl + note.user_id + this.noteEnd,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({note}),
            
            }).then(
                res=> res.json())
        }

        // Destroy /api/v1/users/:user_id/notes/:id(.:format)    
        deleteNoteAdaptor(userId,noteId){
            const note ={
                id: noteId,
                user_Id: userId
            }
            return fetch(this.baseUrl+ note.user_id + this.noteEnd + note.id,{
                method: 'Delete',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({note}),
            
            }).then(
                res=> res.json())
        }
}