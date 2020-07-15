// the app we create a new instance of in index.js which will then create new instance of Users
class App{
    constructor() {
        this.users = new Users()
    }
}