class CreateOrLoginView{
    constructor(createUserFunction, loginUserFunction){
        // createUserfunction - creates the user on the api side 
        this.renderWelcome()
        // create the form and set up hooks
        this.createUserListner()
        this.loginUserListner()
        this.menuSignInListner()
        this.menuSignUpListner()
        this.menuRootListner()
        this.createUserFunction = createUserFunction
        this.loginUserFunction = loginUserFunction
        
    }
    createUserListner(){
        const x = document.getElementById("create-user-form")
        x.addEventListener("submit", this.onCreateSubmit.bind(this));
    }
    onCreateSubmit(e) {
        e.preventDefault();
        // parse the form fields and pass the data to the callback
        this.newName = document.getElementById("create-user-name") 
        this.newUserName = document.getElementById("create-user-username")
        const name = this.newName.value
        const userName = this.newUserName.value
        this.createUserFunction(name,userName);
    }
    loginUserListner(){
        const x = document.getElementById("login-user-form")
        x.addEventListener("submit", this.onLoginSubmit.bind(this));
    }
    onLoginSubmit(e){
        e.preventDefault();
        this.userName = document.getElementById("login-user-username")
        const userName =this.userName.value
        this.loginUserFunction(userName)
    }
    

    // hide show elements
    hideDiv(element) {
        const x = document.getElementById(element);
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "none";
        }
      }

      showDiv(element){
          const x = document.getElementById(element);
          if (x.style.display === "none"){
              x.style.display = "block";
          }else {
              x.style.display = "block";
          }
      }

      loggedOutDiv(){
          const x = document.getElementsByClassName("logged-in-visible")
          for(let element of x){ 
            console.log("element: " + element + ", element.id: " + element.id)
              this.hideDiv(element.id)}
      }

// logged out views
    renderWelcome(){
        this.loggedOutDiv()
        this.showDiv("welcome")
        this.hideDiv("users-container")
    }
    renderSignUp(){
        this.loggedOutDiv()
        this.hideDiv("welcome")
        this.showDiv("users-container")
        this.hideDiv("l-user")
        this.showDiv("c-user")
    }
    renderSignIn(){
        this.loggedOutDiv()
        this.hideDiv("welcome")
        this.showDiv("users-container")
        this.showDiv("l-user")
        this.hideDiv("c-user")
    }
// menulistner
    menuRootListner(){
        const x = document.getElementById("menu-welcome")
        x.addEventListener("click", this.renderWelcome.bind(this))
    }
    menuSignUpListner(){
        const x = document.getElementById("menu-signup")
        x.addEventListener("click", this.renderSignUp.bind(this))
    }
    menuSignInListner(){
        const x = document.getElementById("menu-signin")
        x.addEventListener("click", this.renderSignIn.bind(this))
    } 
}