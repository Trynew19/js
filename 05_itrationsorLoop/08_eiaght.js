const mynums = [1,2,3]

const total = mynums.reduce((acc,curr)=> acc+curr,5)

// console.log(total);


// shoping cart


const shopingCart = [
    {
        name:"vivo t2 pro max",
        price:20000
    },
    {
        name:"sumsung t2 pro max",
        price:21000
    },{
        name:"poco t2 pro max",
        price:10000
    },{
        name:"realme t2 pro max",
        price:15000
    }
]

const pricetopay = shopingCart.reduce((acc,item)=> acc+item.price ,0)

console.log(pricetopay);