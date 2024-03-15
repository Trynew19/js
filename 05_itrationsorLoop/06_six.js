// Filter 

           // filter use is liye karte hai array par kyuki jab foreach lagate hai to aur usko valriables m save karte hai to vah koi value return nhi karta hai 


const nums = [1,2,3,4,5,6,4,7,8,9,10]         

// const newnums = nums.filter((num)=> num > 4)   //1 method 

const newnums = nums.filter((num)=> {            //2method
     return num > 5
})

console.log(newnums);