// datesssssssssssssss


const myDate = new Date()

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());



// const myCreateDate = new Date(1970 ,2, 22 , 5 , 3)

// console.log(myCreateDate.toLocaleString());


const mycreatedate = new Date("12-03-2004")

const timestamp =  Date.now()

// console.log(timestamp);


// console.log(mycreatedate.getTime());

// console.log(Math.floor(Date.now()/1000));     //for convert into second

let newdate = new Date()

console.log(newdate);
// console.log(newdate.getDay());
// console.log(newdate.getMonth());
// console.log(newdate);

let dateee = newdate.toLocaleString('default',{
    weekday:"long"
})
console.log(dateee);