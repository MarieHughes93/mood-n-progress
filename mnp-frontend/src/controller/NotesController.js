class NotesController{
    constructor(){
        this.notes = []
        this.adapter = new ClassAdaptor()
        this.initBindingAndEventListners()
        this.fetchAndLoadNotes()
    }
    initBindingAndEventListners(){
        this.notesContainer = document.getElementById('notes-container')
        this.notesCreateContainer = document.getElementById('notes-create')
        this.noteForm = document.getElementById('note-create-form')
        this.newNoteTitle = document.getElementById('note-create-title')
        this.newNoteContent = document.getElementById('note-create-content')
        
        this.noteId = document.getElementById('add-user-id')
        this.notesShowContainer = document.getElementById('notes-show')
        this.noteForm.addEventListener('submit', this.createNote.bind(this))
    }

    createNote(e){
        e.preventDefault()
        const title = this.newNoteTitle.value
        const content = this.newNoteContent.value
        const user_id = this.noteId.value
        this.adapter.createNote(title,content,user_id)
        .then(note=> {
            this.notes.push(new Note(note))
            this.newNoteTitle.value = ''
            this.newNoteContent.value = ''
            this.render()
        })
    }

    fetchAndLoadNotes(){
        this.adapter
        .getNotes()
        .then(notes => {
            notes.forEach(note => this.notes.push(new Note(note))) 
        })
        .then(()=>{
            this.render()
        }) 
    }

    render(){
        this.notesShowContainer.innerHTML = this.notes.map(note => note.renderLi()).join('')
    }
}