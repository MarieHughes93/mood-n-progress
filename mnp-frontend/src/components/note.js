class Note {
    constructor(noteJSON){
        this.id = noteJSON.id
        this.title = noteJSON.title
        this.content = noteJSON.content
        this.user_id = noteJSON.user_id
    }
    
    renderLi() {
        return `<li>${this.title}</li>`
    }

}