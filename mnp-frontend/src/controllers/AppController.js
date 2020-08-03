class AppController{
/*INITIALIZE*/
    // "on creation" ... the initialize of JS
    constructor() {
        this.current_user = ""
        this.adaptor = new ModelAdaptor()
        this.notes = []
        this.users = []
        this.currentID = ''
        this.view = ''
        // if there is no current user we need to login or sign up so a new CreateOrLogin object is created.
        if (!this.current_user){
            this.view = new CreateOrLoginView(this.submitCreation.bind(this),this.submitLogin.bind(this));
        }
    }
/*Sessions*/
    //function to signn after login or creation 
    signin(user){
        this.current_user = user
        this.currentID = this.current_user.id
        this.setUserId()
        this.setUserName()
        // after signin new mainview is created and app controller passes functions
        this.view = new MainView(
            this.createNote.bind(this),
            this.fetchNotes.bind(this)
        )
        // view is the signin root page
        this.view.noteIndexView()
    }
     submitLogin(userName){
        this.adaptor.login(userName).then(user=> {
            this.signin(user)
        })
    }
/*LISTNERS*/
    // Edit Note
    showListner(){
        const viewButton = document.getElementsByClassName('noteShow');
        for(let element of viewButton){
            element.addEventListener("click",this.fetchNote.bind(this))
        }
    } 
    destroyListner(){
        const deleteButtons = document.getElementsByClassName('noteDelete');
        for(let element of deleteButtons){
            element.addEventListener("click",this.submitDestroy.bind(this))
        }
    } 
/*CREATE*/
    // create User 
    submitCreation(name,username){
        // adaptor to backend to confirm username
        this.adaptor.createUser(name,username).then(user=> {
            // user object is passed into signin function
            this.signin(user)
        })
    }
    // Create note
     createNote(title,content){
        // id to pass to adaptor
        const userID = this.currentID
        // adaptor to backend to create note
        this.adaptor.createNote(title,content,userID).then(note=> {
            // add note to array of notes
            this.notes << note
            // change view to index
            this.view.noteIndexView()
        })
    }
/*READ*/
    // put fetched data into index div
    noteIndex(){
        this.noteIndexContainer = document.getElementById("i-notes")
        if (this.notes.length === 0){
            this.noteIndexContainer.innerHTML = `<h1>Welcome ${this.current_user.name}!</h1><br><br> It seems you do not have any entries at this time. Go ahead and click "create note" to make one!`
        }else{
        this.noteIndexContainer.innerHTML = this.notes.map(note => note.renderIndex()).join('')
        }
    }
    noteShow(note){
        const selectNote = note
        this.noteRead = document.getElementById("r-note")
        this.noteRead.innerHTML = selectNote.renderShow()
    }
/*UPDATE*/
    // Update Note
    // editNote(){}
    /* TO BE ADDED
        // Update User
        updateUser(){}
    */
/*DESTROY*/
    // delete note
    submitDestroy(event){
        // using the event that triggerd the listen we then use it to get the notes id.
        const noteId = event.target.value
        const userId = this.currentID
        // the adapto to backend to delete note
        this.adaptor.deleteNote(userId,noteId).then(()=>{
            // return to updated note index
            this.view.noteIndexView()
        })
    }
/*FETCH*/
    // 
    fetchNotes(){
        const userID = this.currentID
        this.notes = []
        this.adaptor.readNotes(userID)
        .then(notes => {
            notes.forEach(note => this.notes.push(new Note(note))) 
        })
        .then(()=>{
            this.noteIndex(),
            this.showListner.bind(this)()
        })
    }
    fetchNote(event){
        // using the event that triggerd the listen we then use it to get the notes id.
        const noteId = event.target.value
        const note = this.notes.find(({id})=> id === Number(noteId))
        this.noteShow(note)
        this.destroyListner()
        this.view.noteShowView()
    }
/*SETTER*/
    // set user_id field for all index
    setUserId(){
        const x = document.getElementsByClassName("user_id")
                for(let element of x){element.value = `${this.current_user.id}`}
    }
    // set username field for all index
    setUserName(){
        const x = document.getElementsByClassName("current_user_name")
        for(let element of x){element.innerHTML = `${this.current_user.name}`}
    }
}