// Inheritance


class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME IS :- ${this.username}`);
    }
}


class Teacher extends User{   // yha par extends key use kiya hai user ko yadi techer banaya jay to jitna ho ske utna properties le sake jo ki kahlata hai inheritance
    constructor(username,email,password){
        super (username)      // aur jab ham super call karenge to yah automatic dekhta hai ki koun si class ko extends kiya hai aur usse  value le leta hai
        this.email = email
        this.password = password
    }

    addcourses(){
        console.log(`A course added by teacher${this.username} `);
    }
}


const krishna = new User("krishna")
const krishna2 = new Teacher("krishna chauhan","krishna@krishna.com","123")

console.log(krishna2.logme());


console.log(krishna.logme());


console.log(krishna === krishna2);

console.log(krishna instanceof User);
