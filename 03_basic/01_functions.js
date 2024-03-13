
//  functions 



function printMyName (){
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");
}
// 
// console.log(printMyName());


// add two numbers 

function add (num1,num2){          //num1 , num2 parameters hai
    // console.log("krishna chauhan");

 return num1 + num2

 console.log("rahul");   // agr return kar diye to uske bad koi aur kam nhi hota alava jo tum return m diye ho
}

const result  = add(1,2)    //aur yha 1 ,2 arguments hai

// console.log(`result:${result}`);


// jab user login ho to message dena 


function loginmessage(username = "krishna"){  //bydefault username ka value krishna hoga agr koi value nhi dega to
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`

} 

console.log(loginmessage("rahul"));