
class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME IS :- ${this.username}`);
    }

    static createId(){    // static tab use karte hai jab hame kisi kam ko kisi ke liye nhi karana hota hai
        return `12365`
    }
}
// const krishna = new User("krishna chauhan")

// console.log(krishna.createId());


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email
    }
}

const deppti = new Teacher("deepti jain","deppti@deepti.com")

console.log(deppti.createId());     //jab static lag jayega to uska children bhi usko use nhi kar sakta 

