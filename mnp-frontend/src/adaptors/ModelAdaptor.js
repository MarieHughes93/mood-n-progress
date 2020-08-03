class ModelAdaptor{
/*INITIALIZE*/
    // "on creation" ... the initialize of JS
    constructor(){
        // create attributes of object with default values
        this.baseUrl = 'http://localhost:3000/api/v1/users/'
        this.noteEnd = "/notes/"
        this.loginUrl = 'http://localhost:3000/api/v1/login/'
    }
 /*CREATE*/
    // Create User (Users Create [/api/v1/users])
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
    // Create Note (Users Note Create [/api/v1/users/:user_id/notes/])
    createNote(title,content,userId) {
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
/*READ*/
     // Fecth Notes (User's Note[/api/v1/users/:user_id/notes/])
    readNotes(userID){
        const user = {
            id: userID
        }
        // grab the json data from the controller/backend(index) 
        return fetch(this.baseUrl + user.id + this.noteEnd).then(res => res.json()
        // THEN takes the json strong and makes a json object
        )
    }
    // Fecth Note (User's Note[/api/v1/users/:user_id/notes/:noteId])
    readNote(noteId,userId){
        const note = {
            id: noteId,
            userId: userId
        }
        return fetch(this.baseUrl + note.userId + this.noteEnd + note.id).then(res => res.json()
        )
    }
    // Login (Users Show [/api/v1/login/:username/])
    login(username) {
        const user = {
            username: username,
        }
        return fetch(this.loginUrl + user.username).then(res=> res.json())
    }
/*UPDATE*/
    /* TO BE ADDED
        // Update User (User edit) [/api/v1/users/:user_id/])   
        updateUser(){}
        // Update Note (User Note edit) [/api/v1/users/:user_id/notes/:id/])   
        editNote(){}
    */
/*DESTROY*/
    /* TO BE ADDED
        // Destroy User (User Destroy) [/api/v1/users/:user_id])   
        destroyUser(){}
        // Destroy All Notes (User Notes Destroy) [/api/v1/users/:user_id/notes/])   
        destroyAllNotesAdaptor(){}
    */
    // Destroy Note (User Note Destroy) [/api/v1/users/:user_id/notes/:id/])    
    deleteNote(userId,noteId){
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