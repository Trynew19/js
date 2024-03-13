// symbol ko object m add karna

const mysym = Symbol("mysemm1")


const user = {
    name:"krishna",
    [mysym] :"mysem2",
    fullName:"krishna chauhan",
    age:20,
    email:"chauhan@gmail.com",
    location:"bhopal",
    IsLoggedln:false,

}

// console.log(user.fullName);

// console.log(user["location"]);



// Object.freeze(user)   // freeze karne ke bad user(object) m koi change nhi hota hai

// user.email = "krishna#gmail.com"

// console.log(user[mysym]);


user.greeting = function(){
    console.log(`welcome js user :${user.fullName}`);
}


console.log(user.greeting());