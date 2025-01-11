// const tinderUser=new Object(); this is singleton

const tinderUser={};
 tinderUser.id="727s;d"
 tinderUser.name="name";
 tinderUser.isLoggedIn=false;

//console.log(tinderUser)

const regularUser={
    email:"sumitjnndjcndj",
    fullname:{
        username:{          // nesting of object
            name:"sumit"
        }
    }
}

//console.log(regularUser.fullname.username)

const obj1={1:"a",2:"e",3:"d"}
const obj2={4:"f",5:"s",6:"l"}

// add to object

const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)

const obj4={...obj1,...obj2}
//console.log(obj4);


const obj5=[
    {
        name:"sumit"
    },
    {
        vill:"basant"
    }
]

//console.log(obj5[1].vill)


console.log(Object.keys(obj1));  // is return ik array hoga
// aise hi hum value bhi print krwa sakte hai


console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course={
    courseName:"js in hindi",
    price:"334",
    courseinstructor:"hitesh"
}

const {courseinstructor: instructure}=course;
//console.log(courseinstructor)
console.log(instructure)