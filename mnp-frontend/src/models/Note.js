class Note {
    constructor(noteJSON){
        this.id = noteJSON.id
        this.title = noteJSON.title
        this.content = noteJSON.content
        this.user_id = noteJSON.user_id
    }
    renderIndex(){
        return `<h2><strong>${this.title}</strong></h2><button id="noteShow" class="noteShow" value="${this.id}">View</button><br>`
    }
    renderShow(){
       return `<h1><strong>Title:</strong></h1><strong>${this.title}</strong><h3><strong>Content:</strong></h3>${this.content}<br><br><button id="noteDelete" class="noteDelete" value="${this.id}">Delete</button></li><br>`
    }
}