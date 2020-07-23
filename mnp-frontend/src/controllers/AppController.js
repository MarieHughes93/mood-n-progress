class AppController{
    constructor() {
        this.adaptor = new ModelAdaptor()
        this.collectUsers()
        this.current_user = ""
        this.current_note = ''
        this.notes = []
        this.users = []
        this.view = ''
        // this.user = User.getLoggedIn();
        // if there is no current user we need to login or sign up
        if (!this.current_user){
            this.view = new CreateOrLoginView(this._onCreateUser.bind(this),this._loginUser.bind(this));
        }
    }
    // sessions
    _signin(user){
        this.current_user = new User(user)
        this.setUserId()
        this.setUserName()
        this.view = new MainView(
        this._createNoteFunction.bind(this),
        this._fetchNoteFunction.bind(this),
        this._updatNoteFunction.bind(this),
        this.current_note
            )
        this.view.noteIndexView() }


    _onCreateUser(name,username){
        this.adaptor.createUserAdaptor(name,username).then(user=> {
            this._signin(user)
        })
    }
     _loginUser(userName){
        this.adaptor.loginAdaptor(userName).then(user=> {
            this._signin(user)
        })
    }
     // note
     _createNoteFunction(title,content,userId){
        this.adaptor.createNoteAdaptor(title,content,userId).then(note=> {
            this.notes << note
            this.view.noteIndexView()
        })
    }
    _fetchNoteFunction(view){
        this.notes = []
        this.adaptor.readNotesAdaptor()
        .then(notes => {
            notes.forEach(note => this.notes.push(new Note(note))) 
        })
        .then(()=>{
            this.renderindex(),
            this.onEditClickListner()
        })
    }
    onEditClickListner(){
        const editButtons = document.getElementsByClassName('noteDelete');
        
        for(let element of editButtons){
            element.addEventListener("click",this.deleteNote.bind(this))
        }
    }
    deleteNote(event){
        const noteId = event.target.value
        this.adaptor.deleteNoteAdaptor(noteId).then(()=>{
            this.view.noteIndexView()
        })
    }
    
    

    // innhtml is at risk for someone entering html format to alter the page. need to find a way to create for the amount of notes the <li with each notes id but then add the text with innertext... comeback to it chocho.. baby steps
    renderindex(){
        this.noteIndexContainer = document.getElementById("index-note-list")
        this.noteIndexContainer.innerHTML= this.notes.map(note => note.renderIndex()).join('')
        // this.noteIndexContainer.innerHTML = this.notes.map(note => note.render())
    }

    collectUsers(){
        this.users = []
        this.adaptor
        .readUsersAdaptor()
        .then(users => {
            users.forEach(user => this.users.push(new User(user))) 
        })
    }

    _fetchUserFunction(){
        this.collectUsers()
        this.users.find(user => user === this.current_user)
        .then(()=>{
        this.renderUserShow()
    }) 
    }
    renderUserShow(){
        this.userShowContainer = document.getElementById("r-user")
        this.userShowContainer.innerHTML= this.user.renderShow()
    }
     
            
     _updatNoteFunction(title,content,userId){
        this.adaptor.updateNoteAdaptor(title,content,userId).then(note=> {
            this.view.noteShowView(note)
        })
    }
    

        
        _deleteNoteFunction(title,content,userId){
            this.adaptor.deleteNoteAdaptor(title,content,userId).then(notes=> {
                this.view.noteIndexView
            })
        }

        // user
        _updateUserFunction(name,username){
            this.adaptor.updateUserAdaptor(title,content,userId).then(notes=> {
                this.view.userShowView()
            })
        }
        
    setUserId(){
        const x = document.getElementsByClassName("user_id")
                for(let element of x){element.value = `${this.current_user.id}`}
    }
    setUserName(){
        const x = document.getElementsByClassName("current_user_name")
                for(let element of x){element.innerHTML = `${this.current_user.name}`}
    }
       
    
}


// this.showDiv("welcome")
// this.showDiv("users-container")
//     this.showDiv("l-user")
//     this.showDiv("c-user")
//     this.showDiv("r-user")
//     this.showDiv("u-user")

// this.showDiv("notes-container")
//     this.showDiv("overview")
//         this.showDiv("index-note")
//         this.showDiv("index-note-list")
//     this.showDiv("c-note")
//     this.showDiv("r-note")
//     this.showDiv("u-note")
//     this.showDiv("d-note")