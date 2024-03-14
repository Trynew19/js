
// Falsy value 

// false , 0 , -0 , BigInt 0n , undefined , NaN , "" ,null

// Truthy values 
   
//    "o","false"," ",[] ,{},function (){}



// how we cheack

const myArray = []

if (myArray.length === 0) {
    console.log("Array is emapty");
}


// for object

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object are empty");
}




// Nullish coalescing opratore (??) for only null and undefine


let val1; 

// val1 = null ?? 20;
val1 = undefined ?? 50;

console.log(val1);

// terniary opratore

// condition  ? true : false

const price = 500

price <= 400 ? console.log("price is less than 400") : console.log("price is not less tahn 400");
