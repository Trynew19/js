
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

// console.log(loginmessage("rahul"));



// rest opratore

function calculatecartprice (...num1){      // yha tin dot lga dene se ham parameters m jitna bhi value dalenge usko yah ak sath array ke form m de dega
    return num1

}

// console.log(calculatecartprice(5,5,66,78,96));


// object handle with function

const user = {
    name:"krishna chauhan",
    age:35
}

function handleObject(anyobject){

    // console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}

// handleObject(user)
handleObject({
    name:"rahul",
    age:32
})



// array with function

const newArray = [1,2,3,4,5,6,5]


function printsecondvalue (getArray){
    return getArray[1]

}

// console.log(printsecondvalue(newArray));
console.log(printsecondvalue([255,6685,886]));
