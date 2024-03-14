

const user = {
    username:"krishna chauhan",
    age:20,
    welcomeMessage : function () {
        console.log(`${this.username}` ,"welcome to website");
        // console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "rahul kuamr singh"

// user.welcomeMessage()

// console.log(this);


// function krishna (){
//     const username = "krishna chauhan"

//     console.log(this);
// }

// krishna()

// const krishna = function(){
//     const username = "krishna chauhan"
//     console.log(this);
// }

// krishna()

const krishna = ()=>{
    const username = "krishna chauhan"

    // console.log(this);
}

// krishna()


// const addtwo = (num1,num2)=>{
//     return num1 + num2
// }

// console.log(addtwo(3,5))

// const addtwo = (num1,num2)=> num1 + num2            // or (num1 + num2 ) bhi likh sakte hai
const addtwo = (num1,num2)=> (num1 + num2)          // it called is implshut return

// console.log(addtwo(55,666))



// IIFE+++++ Immediately invoked function expression

( function onedfg () {
    console.log("krishna chauhan");
} )();

(()=>{
    console.log("rahul kumar");
})()