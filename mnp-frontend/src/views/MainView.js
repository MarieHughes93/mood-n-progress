class MainView{
    constructor(){
        this.notes=[]
        this.noteIndexView()
    }


    // fetch data
    fetchAndLoadNotes(){}
    FetchAndLoadUser(){}
    // crud
    createNoteListner(){}
    updateNoteListner(){}
    destroyNoteListner(){}
    updateUserListner(){}


// views
    noteIndexView(){}
    noteCreateView(){}
    noteShowView(note){}
    userShowView(){}
    noteEditView(){}
    userEditView(){}

    menuOverViewListner(){}
    menuProfileListner(){}
    menuCreateListner(){}
    


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
          const x = document.getElementsByClassName("logged-out-visible")
          for(let element of x){this.hideDiv(element.id)}
      }
}