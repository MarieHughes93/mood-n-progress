class AppController{
    constructor() {
        this.adaptor = new ModelAdaptor()
        this.current_user = ""
        this.notes = []
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
        this._fetchNoteFunction.bind(this)
            )}

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
    _fetchNoteFunction(){
        this.notes = []
        this.adaptor
        .readNoteAdaptor()
        .then(notes => {
            notes.forEach(note => this.notes.push(new Note(note))) 
        })
        .then(()=>{
            this.render()
        }) 
    }

    // innhtml is at risk for someone entering html format to alter the page. need to find a way to create for the amount of notes the <li with each notes id but then add the text with innertext... comeback to it chocho.. baby steps
    render(){
        this.noteIndexContainer = document.getElementById("index-note-list")
        this.noteIndexContainer.innerHTML= this.notes.map(note => note.renderIndex()).join('')
        // this.noteIndexContainer.innerHTML = this.notes.map(note => note.render())
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
    // setNoteId(){
    //     const x = document.getElementsByClassName("note_id")
    //             for(let element of x){element.value = `${this.current_user.id}`}
    // }
    
}