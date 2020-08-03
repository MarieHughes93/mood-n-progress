class MainView{
    constructor(createNote,fetchNote){
        this.notes = []
        this.createNote = createNote
        this.fetchNote = fetchNote
        this.menuListner()
        this.createListner()
    }
/*CREATE*/
    // 
    submitNote(e){
        e.preventDefault();
        this.newTitle = document.getElementById("create-note-title") 
        this.newContent = document.getElementById("create-note-content")
        this.newUserId = document.getElementById("current_userId")
        const title = this.newTitle.value
        const content = this.newContent.value
        this.createNote(title,content);
    }
/*LISTNER*/
    // 
    menuListner(){
        const overview = document.getElementById("menu-overview")
        const createNote = document.getElementById("menu-c-note")
        overview.addEventListener("click", this.noteIndexView.bind(this))
        createNote.addEventListener("click", this.noteCreateView.bind(this))
        /* to add 
        show
        const profile = document.getElementById("")
        profile.addEventListener("click", this.userShowView.bind(this))
        const noteView = document.getElementById("")
        noteView.addEventListener("click", this.noteShowView.bind(this))

        update
        const profileUpdate = document.getElementById("")
        profileUpdate.addEventListener("click", this.userUpdateView.bind(this))
        const noteUpdateView = document.getElementById("")
        noteUpdateView.addEventListener("click", this.noteUpdateView.bind(this))
        */
    }
    createListner(){
        const x = document.getElementById("c-note-form")
        x.addEventListener("submit", this.submitNote.bind(this))
    }
    noteIndexView(){
        this.fetchNote()
        this.resetAllDiv()
        this.loggedMenu()
        this.showDiv("notes-container")
        this.showDiv("i-notes")
    }
    noteCreateView(){
        this.resetForm()
        this.resetAllDiv()
        this.loggedMenu()
        this.showDiv("notes-container")
        this.showDiv("c-note")
    }
    // 
    noteShowView(){
        this.resetAllDiv()
        this.loggedMenu()
        this.showDiv("menu-s-note")
        this.showDiv("notes-container")
        this.showDiv("r-note")
    }
    /*TO BE ADDED
        
        // 
        userShowView(){}
        // 
        noteUpdateView(){}
        // 
        userUpdateView(){}
        // 
        overviewRootView(){}
    */
/*Dom Manipulation*/
    // 
    resetForm(){
        this.newTitle = document.getElementById("create-note-title") 
        this.newContent = document.getElementById("create-note-content")
        this.newTitle.value =''
        this.newContent.value =''
    }
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