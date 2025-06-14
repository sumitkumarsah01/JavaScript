// let ans1=new Promise( (resolve ,reject) =>{
//     if(false){
//         return resolve();
//     }
//     else{
//         return reject();
//     }
// })

// ans.then(function(){
//     console.log("Not error");
// })
// .catch(function(){
//     console.log("error");
// })




let ans2=new Promise((resolve,reject)=>{
    let n=Math.floor(Math.random()*10);

    if(n<5){
         resolve();
    }
    else{
         reject();
    }
})

ans2.then(function(){
    console.log("ye 5 se chota hai")
}).catch(function(){
    console.log("5 se bada hai")
})

//***************************************************************************************/


// let ans =new Promise(function(resolve,reject){
//     return resolve("Sbase pahle ghar awwo ")
// })

// let p1=ans.then(function(data){
//     console.log(data);
//     return new Promise(function(resolve,reject){
//         return resolve("pahle Gate kholo phir ander aawo")
//     })

// })

// let p2=p1.then(function(data){
//     console.log(data);
//     return new Promise(function(resolve,reject){
//         return resolve("khana khawo")

//     })

// })
// p2.then(function(data){
//     console.log(data);
// })





