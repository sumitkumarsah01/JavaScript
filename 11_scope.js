//var c = 70
let a = 90;
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



//  console.log(a);
//  console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     //console.log(website);

     two()

}

 one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
     //console.log(website);
}

 //console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//console.log(addone(5))

function addone(num){  // this is not give error
    return num + 1;
}

// most important topic hoisting
//addTwo(5)
//const addTwo = function(num){ // this is called expression. this is given error because function are store the variable
    //return num + 2
//}

