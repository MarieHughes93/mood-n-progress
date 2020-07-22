class MainView{
    constructor(createNoteFunction){
        this.notes=[]
        this.noteIndexView()
        this.menuOverViewListner()
        this.menuProfileListner()
        this.menuCreateNoteListner()
        this.createNoteFunction = createNoteFunction
    }

    // crud
    createNoteListner(){
        const x = document.getElementById("")
        x.addEventListener("submit", this.oncreateNoteFunction())
    }
    onCreateNoteSubmit(e){
        e.preventDefault();

        this.newTitle = document.getElementById("create-note-title") 
        this.newContent = document.getElementById("create-note-content")
        const title = this.newTitle.value
        const content = this.newContent.value
        this.createNoteFunction(title,content);
    }

    updateNoteListner(){
        const x = document.getElementById("")
        x.addEventListener("submit", this.updateNoteFunction.bind(this));
    }
    onUpdateNoteSubmit(e){
        e.preventDefault();
    }

    
    updateUserListner(){
        const x = document.getElementById("")
        x.addEventListener("submit", this.updateUserFunction.bind(this));
    }
    onUpdateUserSubmit(e){
        e.preventDefault();
    }

    destroyNoteListner(){
        const x = document.getElementById("")
        x.addEventListener("submit", this.destroyNoteFunction.bind(this));
    }
    onDeleteUserSubmit(e){
        e.preventDefault();
    }

    showNoteListner(){const x = document.getElementById("")
    x.addEventListener("submit", this.showNoteFunction.bind(this));}
    onShowNoteSubmit(e){
        e.preventDefault();
    }


// views
    noteIndexView(){
        this.loggedOutDiv()
        this.loggedInDiv()
        this.hideDiv("users-container")
        this.hideDiv("c-note")
        this.hideDiv("r-note")
        this.hideDiv("u-note")
        this.hideDiv("d-note")
        this.showDiv("i-note")
    }
    noteCreateView(){
        this.loggedOutDiv()
        this.hideDiv("users-container")
        this.hideDiv("i-note")
        this.hideDiv("r-note")
        this.hideDiv("u-note")
        this.hideDiv("d-note")
        this.showDiv("c-note")
    }
    noteShowView(note){
        this.loggedOutDiv()
        this.hideDiv("users-container")
        this.hideDiv("i-note")
        this.hideDiv("c-note")
        this.hideDiv("u-note")
        this.hideDiv("d-note")
        this.ShowDiv("r-note")
    }
    noteEditView(){
        this.loggedOutDiv()
        this.hideDiv("users-container")
        this.hideDiv("i-note")
        this.hideDiv("c-note")
        this.hideDiv("r-note")
        this.hideDiv("d-note")
        this.ShowDiv("u-note")
    }
    userShowView(){
        this.loggedOutDiv()
        this.hideDiv("notes-container")
        this.showDiv("users-container")
        this.showDiv("r-user")
        this.hideDiv("u-user")
    }
    
    userEditView(){
        this.loggedOutDiv()
        this.hideDiv("notes-container")
        this.showDiv("users-container")
        this.hideDiv("r-user")
        this.showDiv("u-user")
    }

    menuOverViewListner(){
        const x = document.getElementById("menu-overview")
        x.addEventListener("click", this.noteIndexView.bind(this))
    }
    menuProfileListner(){
        const x = document.getElementById("menu-profile")
        x.addEventListener("click", this.userShowView.bind(this))
    }
    menuCreateNoteListner(){
        const x = document.getElementById("menu-create-note")
        x.addEventListener("click", this.noteCreateView.bind(this))
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
      loggedInDiv(){
        const x = document.getElementsByClassName("logged-in-visible")
        for(let element of x){this.showDiv(element.id)}
    }
      loggedOutDiv(){
          const x = document.getElementsByClassName("logged-out-visible")
          for(let element of x){this.hideDiv(element.id)}
      }
}