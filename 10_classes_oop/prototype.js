// inheritance 

const User  ={
    name:"krishna chauhan"
}

const college = {
    name:"CIST,BHOAPL"
}

college.__proto__ = User        //this is old version

Object.setPrototypeOf(User,college)     //new syntax
