// function

function name(){
    //console.log("Sumit");
}

//name();

//  function addTwonumber(number1, number2){
//       return number1+number2;
    
//  }
// const resul=addTwonumber(2,3);
// console.log(resul)  // this function are give the undefined because function are not return the value

// function addTwonumber(number1, number2){
//     let result=(number1+number2)
//     return result;
    
// }
// const result=addTwonumber(3,4);
// console.log(result)


// function loginusermessage(username){
//     if(username===undefined){
//         console.log("please enter the name ");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginusermessage());


function calculateCartPrize(...num1){ // rest Operator
    return num1;
}
//console.log(calculateCartPrize(20,43,54,45)); // array return krega 

function calculateCartPrize2(val1,val3,...num1){ // rest Operator
    return num1;
}
//console.log(calculateCartPrize2(20,200,30,49));


const user={
    username:"hitesh",
    price:199
}

function handleObject(getObject){
    //console.log(getObject.username)
}
//handleObject(user);


const myNewarray=[200,300,400,500];
function returnSecondvalue(getArray){
    return getArray[2];
}
//console.log(returnSecondvalue(myNewarray))









