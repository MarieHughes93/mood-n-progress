class AppController{
    constructor() {
        this.adaptor = new ModelAdaptor()
        this.current_user = ""
        this.notes = []
        // this.user = User.getLoggedIn();
        // if there is no current user we need to login or sign up
        if (!this.current_user){
            new CreateOrLoginView(this._onCreateUser.bind(this),this._loginUser.bind(this));
        }
    }
    // sessions
    _onCreateUser(name,username){
        this.adaptor.createUserAdaptor(name,username).then(user=> {
            this.current_user = new User(user)
            const x = document.getElementsByClassName("user_id")
                for(let element of x){
                    element.value = `${this.current_user.id}`}
            new MainView()
        })
    }
     _loginUser(userName){
        this.adaptor.loginAdaptor(userName).then(user=> {
            this.current_user = new User(user)
            this.setUserId()
            this.setUserName()
                    new MainView()
        })
    }
     // note
     _createNoteFunction(title,content,userId){
        this.adaptor.createNoteAdaptor(title,content,userId).then(note=> {
            this.notes << note
            this.MainView.noteIndexView
        })
    }
     _updatNoteFunction(title,content,userId){
        this.adaptor.updateNoteAdaptor(title,content,userId).then(notes=> {
            this.MainView.noteShowView(note)
        })
    }
    

        
        _deleteNoteFunction(title,content,userId){
            this.adaptor.deleteNoteAdaptor(title,content,userId).then(notes=> {
                this.MainView.noteIndexView
            })
        }

        // user
        _updateUserFunction(nameusername){
            this.adaptor.updateUserAdaptor(title,content,userId).then(notes=> {
                this.MainView.userShowView()
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