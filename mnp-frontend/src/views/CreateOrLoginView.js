class CreateOrLoginView{
     // createUserfunction - creates the user on the api side 
    constructor(submitCreation, submitLogin){
        // creates the "homepage/root" view
        this.welcomeView()
        //  creates listners for menu options & views for pages
        this.createListner()
        this.loginListner()
        this.menuListner()
        this.createUserFunction = submitCreation
        this.loginUserFunction = submitLogin
    }
/*CREATE*/
    // 
    submitCreation(e) {
        // prevent browser default
        e.preventDefault();
        // parse the form fields and pass the data to the callback
        const name  = document.getElementById("create-user-name").value 
        const userName = document.getElementById("create-user-username").value
        // call adaptor function for
        this.createUserFunction(name,userName);
    }
    // 
    submitLogin(e){
        e.preventDefault();
        const userName  = document.getElementById("login-user-username").value
        this.loginUserFunction(userName)
    }
/*Listners*/
    // 
    menuListner(){
        const welcomeHome = document.getElementById("menu-welcome")
        const signIn = document.getElementById("menu-signin")
        const signUp = document.getElementById("menu-signup")
        welcomeHome.addEventListener("click", this.welcomeView.bind(this))
        signIn.addEventListener("click", this.signInView.bind(this))
        signUp.addEventListener("click", this.signUpView.bind(this))
    } 
    // Listener for the sbumit on signup
    createListner(){
        const signUp = document.getElementById("create-user-form")
        signUp.addEventListener("submit", 
        // the view does createUSerListener so the first "this" is the view
        // the browser (from the addEventListner) will then run submitCreation 
        // By binding = "submitCreation(this === view)"
        this.submitCreation.bind(this));
    }
    // 
    loginListner(){
        const signIn = document.getElementById("login-user-form")
        signIn.addEventListener("submit", this.submitLogin.bind(this));
    }
 /*View*/
    // Root Home View
    welcomeView(){
        this.resetAllDiv()
        this.visitorMenu()
        this.showDiv("welcome")
    }
    // SignUp View
    signUpView(){
        this.resetAllDiv()
        this.visitorMenu()
        this.showDiv("users-container")
        this.showDiv("c-user")
    }
    // SignIn View
    signInView(){
        this.resetAllDiv()
        this.visitorMenu()
        this.showDiv("users-container")
        this.showDiv("l-user")
    }
    /* TO BE ADDED
        // SignIn Error View
        signInErrorView(){}
        // SignUp Error View
        signUpErrorView(){}
    */
/*Dom Manipulation*/
    // Hide given div elemement/node
    // 
    hideDiv(element) {
        const x = document.getElementById(element);
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
    }
    // 
    showDiv(element){
        const x = document.getElementById(element);
        if (x.style.display === "none"){
            x.style.display = "block";
        }else {
            x.style.display = "block";
        }
    }
    // 
    
    // 
    hideLoggedInDiv(){
        const x = document.getElementsByClassName("logged-in-visible")
        for(let element of x){this.hideDiv(element.id)}
    }
    // 
    hideLoggedOutDiv(){
        const x = document.getElementsByClassName("logged-out-visible")
        for(let element of x){this.hideDiv(element.id)}
    }
    hideToBeAdded(){
        const x = document.getElementsByClassName("to-be-added")
        for(let element of x){this.hideDiv(element.id)}
    }
    loggedMenu(){
        this.showDiv("current_user")
        this.showDiv("menu-overview")
        this.showDiv("menu-c-note")
        this.hideDiv("menu-s-note")
    }
    visitorMenu(){
        this.showDiv("menu-welcome")
        this.showDiv("menu-signup")
        this.showDiv("menu-signin")
        this.hideDiv("menu-s-note")
    }
    resetAllDiv(){
        this.hideDiv("welcome")
        this.hideDiv("overview")
        this.hideDiv("users-container")
        this.hideDiv("l-user")
        this.hideDiv("c-user")
        this.hideDiv("r-user")
        this.hideDiv("u-user")
        this.hideDiv("notes-container")
        this.hideDiv("i-notes")
        this.hideDiv("c-note")
        this.hideDiv("r-note")
        this.hideDiv("u-note")
        this.hideDiv("current_user")
        this.hideDiv("menu-welcome")
        this.hideDiv("menu-signup")
        this.hideDiv("menu-signin")
        this.hideDiv("menu-overview")
        this.hideDiv("menu-c-note")
        this.hideDiv("menu-s-note")
    }
}