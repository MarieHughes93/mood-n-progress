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
    _onCreateUser(name,username){
        this.adaptor.createUserAdaptor(name,username).then(user=> {
            this.current_user = new User(user)
            this.setUserId()
            this.setUserName()
            this.view = new MainView(
                this._fetchNoteFunction.bind(this),
                this._createNoteFunction.bind(this),
                this._updatNoteFunction.bind(this),
                this._deleteNoteFunction.bind(this),
                this._updateUserFunction.bind(this),
                )
        })
    }
     _loginUser(userName){
        this.adaptor.loginAdaptor(userName).then(user=> {
            this.current_user = new User(user)
            this.setUserId()
            this.setUserName()
            this.view =  new MainView(this._createNoteFunction.bind(this))
        })
    }
     // note
     _createNoteFunction(title,content,userId){
        this.adaptor.createNoteAdaptor(title,content,userId).then(note=> {
            this.notes << note
            this.view.noteIndexView()
        })
    }
            
     _updatNoteFunction(title,content,userId){
        this.adaptor.updateNoteAdaptor(title,content,userId).then(notes=> {
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