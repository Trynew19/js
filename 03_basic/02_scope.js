


// var d = 2556

// let e = 68952

// const f = 5555


// let b = 25




// if (true) {
//     // const a = 10
//     let b = 20
//     var d = 30

//     // console.log(f);
//     // console.log("inner" , b);
//     console.log("inner",d);
// }

// // console.log(a);
// // console.log(b);
// console.log(d);



// nested  or closer function


function one() {
    const username = "krishna chauan"

    function two() {
        const college = "rgpvbhopal"
        
        console.log(username);
    }
    // two()

    // console.log(college);        //agar function ke andar function hai to jo andar hai vah apne se bade yani bap ka data ko acces kar sakta hai lekin bap  betet ke data ko access nhi kar sakta 
    
}

// one()


if (true) {

    const username = "krishna chauhan"

    if (username === "krishna chauhan") {
        
        const college = "rgpv bhopal"

        // console.log(username , college);
    }
    
    // console.log(college);
}

// console.log(username);


//  +++++++++++++++++++++++++++++++++++++++ hoisting ++++++++++++++++++++++++++++++++++++

// console.log(addone(2));

function addone(num) {

    return num + 1
    
}

console.log(addone(9));

// console.log(addtwo(5));

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5));