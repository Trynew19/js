const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);

// console.log(Math.PI);

//  Math.PI = 10

// console.log(Math.PI);

const User ={
    name:"krishna chauhan",
    email:"krishna@krishna.com",
    isLoggdlen:true
}

console.log(Object.getOwnPropertyDescriptor(User,"name"));

Object.defineProperty(User,"name",{
    writable:false,
    enumerable:false   //object ke kisi property ko rokne ke liye yah sab use kiya jata hai
})

console.log(Object.getOwnPropertyDescriptor(User,"name"));

for (const [key,value] of Object.entries(User)) {
    if (typeof value !== "function") {
    console.log(`${key} ,:${value}`);
        
    }
}
