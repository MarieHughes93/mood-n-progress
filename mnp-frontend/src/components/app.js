// the app we create a new instance of in index.js which will then create new instance of User
class App{
    constructor(){
        console.log('app loaded')
        this.users = new Users()
    }
}