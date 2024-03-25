

class User {
   
    constructor(username,email,password){
          this.username = username;
          this.email = email;
          this.password = password;
    }

    encryptPassword(){
        return`${this.password}krishna`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }


}


const krishna = new User("krishna chauhan","krishna@gmail.com","65486555")

// console.log(krishna);
console.log(krishna.encryptPassword());
console.log(krishna.changeUsername());