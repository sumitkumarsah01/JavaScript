//for of loop

const arr=[1,2,3,4,5];

for (const num of arr) {
    //console.log(num);
    
}

const greeting="hello Wolrd";

for (const greet of greeting) {
    if(greet==" "){
        continue;
    }
    //console.log(greet)
    
}

const map=new Map();
map.set('IN',"INDIA");
map.set('usa',"united states of america")
map.set('fr',"Bihar")

for (const [key,value] of map) {
    console.log(key);
    //console.log(key,value);

    
}

const myObject ={
    name:"sumit",
    vill:"basantnagar"
}

