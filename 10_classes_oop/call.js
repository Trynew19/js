function setUsername(username){
   this.username = username
   console.log("called");
}

function creatUser(username,email,password){
    setUsername.call(this,username)        //call ke bare m
    this.email=email,
    this.password=password
}

const user = new creatUser("krishna chauhan","krishna@krishna.com","12365")
console.log(user);