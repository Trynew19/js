const corporate = ["krishna","rishabh","rahul"];


const lnct = ["shubahm","aman","raushan"]



// corporate.push(lnct)    //push karne se array ke andar ak aur array aaa jata hai

// console.log(corporate[3][1]);

  
// const all = corporate.concat(lnct)    // concat karne se dono array combine hoke ak aur naya array deta hai n ki array ke andar array

// console.log(all);


// sperad operator 

// const all = [...corporate,...lnct]
// console.log(all);



// const anotherArr = [1,2,3,[5,6,4],[585,585,555,[555,5556,5565,[555963,775,66,55],],],]

// const realArr  = anotherArr.flat(Infinity)      //flat use karne se sab arr ko ak mila kar ak new arr deta hai
// console.log(realArr);



///////////////////////

// console.log(Array.isArray("krishna"));

// console.log(Array.from("krishna"));

// console.log(Array.from({name:"krishna chauhan"}));


// bhut sare variable ko arr m convert karne ke liye

let score1 = 100 
let score2 = 200 
let score3 = 300 


console.log(Array.of(score1,score2,score3));

