// const promisRun=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve()
//         console.log("Asysnc is started")
        
//     },1000)
// })

// promisRun.then(function(){
//     console.log("complete")
// })

// //************************************************************************************

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)
    
// }).then(function(){
//     console.log("task 2 complete")
// })

// //**************************************************************************

// const promisthree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"sumit", email:"sumit@kumarsah"})
//     })

// })

// promisthree.then(function(user){
//     console.log(user)
// })

// // ******************************************************************************************

// const promisfourth=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({name:"Sumit",password:"232435"})
//         }
//         else{
//             reject("Something went worng please try again")
//         }
//     },1000)

// })

// promisfourth.then((user)=>{
//     console.log(user);
//     return user.name;
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("your work is complete")
// })

// ******************************************************************************

const promisefifth=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            return resolve({name:"Sumit",password:"232435"})
        }
        else{
            return reject("Something went worng please try again")
        }
    },1000)
})


async function consumePromiseFive(){
   try {
    const response= await promisefifth
     console.log(response)
    
   } catch (error) {
    console.log(error)
    
   }
}
consumePromiseFive()

//***************************************************************************************

// async function promissixth(){
//     try {
//     const response=await fetch(https/api.github.com/users/github)
//     const data= await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log("error")
//     }
// }
// promissixth();