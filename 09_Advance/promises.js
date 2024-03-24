
// const promiseOne = new Promise(function(resolve,reject){
// //do an any async task
// //db calls,cryptography,network

// setTimeout(function(){
//     console.log("Async task complete");
//     resolve()      //method
// },2000) 
// })



// promiseOne.then(function(){
//     console.log("Promise consume");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolve ");     //iska matlab hai ki jo pahle promise m vah pura ho jay to isko pura kar do
// })








// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("krishna");
//         resolve({username:"krishna",email:"krishna@krishna.com"})      // we can also send data through resolve in parameters
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username:"krishna",password:"123"})
//         }else{
//             reject("ERROR:Somethings Went Wrong")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{console.log("finally promise are resolve or rejected");})


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username:"mohan",password:"123"})
//         }else{
//             reject("ERROR:mohan Went Wrong")
//         }
//     },1000)
// })


// async function consumePromiseFive (){
//     try {
//         const response = await promiseFive
//         console.log(response); 
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function getallUser(){
//   try {
//     let respose =  await fetch('https://randomuser.me/api/')
//     let dataa = await respose.json()
//     console.log(dataa);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getallUser()

fetch("https://randomuser.me/api/")
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((err)=> {
    console.log(err);
})