class AppController{
    constructor() {
        this.MainView = new MainView()
        this.adaptor = new ModelAdaptor()
        this.current_user = ""
        // this.user = User.getLoggedIn();
        // if there is no current user we need to login or sign up
        if (!this.current_user){
            new CreateOrLoginView(this._onCreateUser.bind(this));
        }
    }
        _onCreateUser(name,username){
            this.adaptor.createUser(name,username).then(user=> {
                this.current_user = new User(user)
                this.MainView.renderRoot()
            })
        }
        _loginUser(userName){
            this.adapter.login(userName).then(user=> {
                this.current_user = new User(user)
            })
        }
    
    
}