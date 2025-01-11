// object literal


let mykey=Symbol("key1");

const jsuser={
    name:"sumit",
    "full name":"Sumit kumar sah", // is line ko hum dot operator se use nhi kr sakte hai use this [].
    location:"siwan",
    [mykey]:"newKey",   //define symbol ko excess krne ke liye key ko [] me likha jata hai tab iska type symbol hota hai nhi to ye string rahta hai
    email:"Sumitk@37838.gamil.com",
    isLogged: false
}

//console.log(jsuser.name);
//console.log(jsuser["location"]);
console.log(jsuser);

//object me hum change bhi kr sakte hai

Object.freeze(jsuser); // is line ke baad hum koi change nhi kr sakte hai