
// array

const myArr=[0,1,2,3,4,5];
const myHeros=["shaktiman","naagraj"];
//console.log(myArr[1]);

const myArr2=new Array(1,2,3,4);


// array method
//push     add the value in array last possition
myArr.push(6);
myArr.push(7);
//console.log(myArr)

//pop   delet the value in arrray last possition

//myArr.pop();
//console.log(myArr)

//unshift   add the value in starting possition
// shift  delet the value in starting possition


//console.log(myArr.indexOf(9)); // because index 9 exit hi nhi krta hai

const newArr=myArr.join();
//console.log(myArr);
//console.log(newArr) // iska type ab string ho gya hai 


// slice , splice (important)


//slice

//console.log(myArr.slice(1,3))//   index value pass krte hai aur last include nhi hota hai aur ye 
//console.log(myArr); // original array me change nhi lata hai

//splice


const newArr2=myArr.splice(1,3)
//console.log(newArr2); // isme ye bhi different hai ki last wala value include rahta hai but main difference hai ki ye orignal array me se remove kr deta hai 

//console.log(myArr)
//console.log(newArr2)































