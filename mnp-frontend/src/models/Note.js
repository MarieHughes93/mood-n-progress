class Note {
    constructor(noteJSON){
        this.id = noteJSON.id
        this.title = noteJSON.title
        this.content = noteJSON.content
        this.user_id = noteJSON.user_id
    }
    renderIndex(){
        return `<li>${this.title}<br><button id="note_show" value="${this.id}">View</button></li><br>`
        
    }

}