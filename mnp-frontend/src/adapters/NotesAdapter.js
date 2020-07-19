class NotesAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/notes'
    }

    getNotes(){
        return fetch(this.baseUrl).then(res=>res.json()
        )
    }
    createNote(title,content,userId) {
        const note = {
            title: title,
            content: content,
            user_id: userId,
        }
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({note}),
        
        }).then(
            res=> res.json())
    }
}