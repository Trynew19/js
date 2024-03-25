

// constructer

function User(username, isLoggdlen, Signcount) {

    this.username = username,
        this.Signcount = Signcount,
        this.isLoggdlen = isLoggdlen

        this.greeting = function(){
            console.log(`welcome${this.username}`);
        }

    return this
}

const userOne = new User("krishna", 12, 5)
const userTwo = new User("krishna", 12, 5)
console.log(userOne.constructor);
// console.log(userTwo);

// Note:- jab ham new keyword use karte hai tab ak nya object create hota hai jo ki instance kahlata hai aur dusre step m iske karan ak construter call hota hai aur yah construter sab argument yani sab kuch karke ak last response de deta hai funtion ke andar