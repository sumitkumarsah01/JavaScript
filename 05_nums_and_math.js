const num=400;
console.log(num);

const balance=new Number(500);
console.log(typeof(balance)); // iske type object hai


 console.log(balance.toString().length);
 console.log(balance.toFixed(3));

 const  num2=123.8990;
 console.log(num2.toPrecision(3))

 const hundered=10000000;
 console.log(hundered.toLocaleString('en-IN'));


//***********************MATHS************************* */

console.log(Math);

console.log(Math.abs(-2)); // only negative number to possitive me change krta hai

console.log(Math.round(3.6)); // ye 0.5 ke baad next value par chala jata hai 

console.log(Math.ceil(2.1)); // kisi number ke baad point aata hai to wo next value par chal jayega

console.log(Math.floor(3.4));  // ye point ke pahle jo bhi number rhega usko print krega 

console.log(Math.min(2,3,4,1)); // isme jo sabse chota rhega wahi print hoga

console.log(Math.max(2,3,4,1)); // isme jo sabse bada rahega wahi print hoga 


//console.log(Math.random());
//console.log(Math.random()*10+1); // 10 se multiply isliye kiye hai kyuki kisi bhi point me number me 100 se multiply krte hai to uska ik value shift ho jata hai  aur 1 is liye add kiye hai kyuki mera minimum value 1 hi rhe 

console.log(Math.floor(Math.random()*10)+1);


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);





