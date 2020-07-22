class AppController{
    constructor() {
        this.adaptor = new ModelAdaptor()
        this.current_user = ""
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
                new MainView()
            })
        }
        _loginUser(userName){
            this.adaptor.loginAdaptor(userName).then(user=> {
                this.current_user = new User(user)
                new MainView()
            })
        }
        // note
        _createNoteFunction(title,content,userId){
            this.adaptor.createNoteAdaptor(title,content,userId).then(notes=> {
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
        
    
}