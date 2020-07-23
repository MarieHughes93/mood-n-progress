class MainView{
    constructor(createNoteFunction,fetchNoteFunction,currentNote){
        this.notes = []
        this.currentNote = currentNote
        this.createNoteFunction = createNoteFunction
        this.fetchNoteFunction = fetchNoteFunction
        this.menuOverViewListner()
        this.menuCreateNoteListner()
        this.createNoteListner()
    }

    
    // crud
    createNoteListner(){
        const x = document.getElementById("c-note-form")
        x.addEventListener("submit", this.onCreateNoteSubmit.bind(this))
    }
    onCreateNoteSubmit(e){
        e.preventDefault();
        this.newTitle = document.getElementById("create-note-title") 
        this.newContent = document.getElementById("create-note-content")
        this.newUserId = document.getElementById("current_userId")
        const title = this.newTitle.value
        const content = this.newContent.value
        this.createNoteFunction(title,content);
    }

resetForm(){
    this.newTitle = document.getElementById("create-note-title") 
    this.newContent = document.getElementById("create-note-content")
    this.newTitle.value =''
    this.newContent.value =''
}

// views
    noteIndexView(){
        this.fetchNoteFunction()
        this.loggedOutDiv()
        this.loggedInDiv()
        this.hideDiv("users-container")
        this.hideDiv("c-note")
        this.hideDiv("r-note")
        this.hideDiv("u-note")
        this.hideDiv("d-note")
        this.showDiv("overview")
    }
    noteCreateView(){
        this.resetForm()
        this.loggedOutDiv()
        this.hideDiv("users-container")
        this.hideDiv("overview")
        this.hideDiv("r-note")
        this.hideDiv("u-note")
        this.hideDiv("d-note")
        this.showDiv("c-note")
    }
    

    menuOverViewListner(){
        const x = document.getElementById("menu-overview")
        x.addEventListener("click", this.noteIndexView.bind(this))
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