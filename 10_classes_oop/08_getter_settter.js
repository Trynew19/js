

class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}krishna`
    }

    set password(value){

        this._password = value
    }
}

const krishna = new User("krishna@k.com","123")

console.log(krishna.password);
console.log(krishna.email);