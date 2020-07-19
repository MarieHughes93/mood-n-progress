class User{
    constructor(userJSON) {
        this.id = userJSON.id
        this.name = userJSON.name
        this.username = userJSON.username
        console.log("userjs   name: " + userJSON.name + ", username: " +userJSON.username)
    }
}