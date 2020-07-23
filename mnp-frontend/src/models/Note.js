class Note {
    constructor(noteJSON){
        this.id = noteJSON.id
        this.title = noteJSON.title
        this.content = noteJSON.content
        this.user_id = noteJSON.user_id
    }
    renderIndex(setNote){
        return `<li>Title: ${this.title}<br>Content: ${this.content}<br><button  id="noteDelete" class="noteDelete" value="${this.id}">Delete</button></li><br>`
    }
    
    
    

}