// For of loop

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (const test of arr) {       //test ke jagah kuch bhi name rakh sakte hai aur arr ke jagah vah likhna hota hai jis par loop lagana hota hai aur yah lopp aksar array par lagaya jata hai
    // console.log(test);
}


const greetings = "hello world "

for (const greet of greetings) {  //string ko ak ak kar ke print karata hai
    // console.log(greet);
}

// +++++++  Map +++++++

const map = new Map()

map.set('cist','corporate group of instutuion')
map.set('tit','techno task')
map.set('lnct','laxmi narayan')
map.set('sage','sagar group of instutions')

// console.log(map);

for (const [vall,value] of map) {     //vall and value ke jagah kuch bhi likh sakte hai kyuki yah ak name hai
    console.log(vall ,":-", value);
    
}