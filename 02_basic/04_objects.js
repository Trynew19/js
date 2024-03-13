// object ko add karna 


const obj1 = {
    name:"krishna",
    age:25
}

const obj2 = {
    fullname:"rahul"
}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}         //this is tha best way 

// console.log(obj3);


const user = {
    name:'krishna',
    age:20,
    IsLoggedln:true
}

const users = [
    {
        name:'krishna chauhan',
        age:20
    },
    {
        name:'krishna chauhan',
        age:20
    }
    ,{
        name:'krishna chauhan',
        age:20
    },{
        name:'krishna chauhan',
        age:20
    },{
        name:'krishna chauhan',
        age:20
    }
]


// console.log(users[1].name);


// console.log(user.hasOwnProperty('IsLoggedln'));     //cheack karne ke liye ki isme is name ki property hai ki nhi



// destructor of objects 


const course  = {
    name:"js in hindi",
    courseinstructor:"krishna chauhan",
    price:999
}


// console.log(course.courseinstuctore);

const{courseinstructor:instructor} = course

console.log(instructor);