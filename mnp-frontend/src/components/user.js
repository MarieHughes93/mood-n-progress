class User{
    constructor(userJSON) {
        this.id = userJSON.id
        this.name = userJSON.name
        this.username = userJSON.username
    }
    renderLi() {
        return `<li>${this.username}</li>`
    }
}