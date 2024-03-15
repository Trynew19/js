const nums = [1,2,3,4,5,6,4,7,8,9,10]         


// let data = nums.map((newnums)=> newnums +10)
// let data = nums.map((newnums)=> { return newnums + 10})

// ++++++++++ chaining +++++++

const  newNums = nums
.map((num)=> num * 10)
.map((num)=> num + 1)
.filter((num)=> num >= 30 )



console.log(newNums);