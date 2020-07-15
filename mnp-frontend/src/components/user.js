class User{
    constructor(userJSON) {
        this.id = userJSON.id
        this.name = userJSON.name
        this.email = userJSON.email
        this.password = userJSON.password
    }
    renderLi() {
        return `<li>${this.name}</li>`
    }
}