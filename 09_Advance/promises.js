
const promiseOne = new Promise(function(resolve,reject){
//do an any async task
//db calls,cryptography,network

setTimeout(function(){
    console.log("Async task complete");
    resolve()      //method
},2000) 
})



promiseOne.then(function(){
    console.log("Promise consume");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolve ");     //iska matlab hai ki jo pahle promise m vah pura ho jay to isko pura kar do
})








const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("krishna");
        resolve({username:"krishna",email:"krishna@krishna.com"})      // we can also send data through resolve in parameters
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})