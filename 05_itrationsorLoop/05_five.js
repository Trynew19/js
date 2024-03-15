// Forech loop

const city = ["kushinagar","gorkhapur","lucknow","mumbai"]

// city.forEach((value)=>{
//     console.log(value);
// })

city.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})



const arr = [
    {
        name:"krishna chauhan",
        age:20
    },
    {
        name:"aman",
        age:22
    },
    {
        name:"mukesh",
        age:25
    },
    {
        name:"niraj",
        age:35
    }
]


arr.forEach((value)=>{
    console.log(value.name,value.age);
})