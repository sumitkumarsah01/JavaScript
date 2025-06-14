const user={
    username:"sumit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);  //(this) refer to the current context
    },
   
}
 //user.welcomeMessage();
  user.username="shubham"
 //user.welcomeMessage();

//console.log(this) // return blank cruly bracket


function chai(){
    let username="lafariya"
    //console.log(this); // this function are not use (this keyword)
}
//chai()


const chai1=function(){
    let username="lafariya"
    //console.log(this.username)
}
chai1();

const arrow=()=>{
    let name="sumit";
    //console.log(this)
}
arrow();

const addTwo=(num1,num2)=>{
    return num1+num2 // this is called explicit 
}
//console.log(addTwo(2,4))

// two way arrow function

const threeNum=(num1,num2,num3)=>(num1+num2+num3);
//console.log(threeNum(2,3,4)) //implicit

const add=(num1,num2)=>({username:"sumit"})
//console.log(add()); // object bhi return krwa sakte hai