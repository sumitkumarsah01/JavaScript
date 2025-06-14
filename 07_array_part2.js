const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);  // array me array isliye dal de rha hai ki kyuki javaScript me array me different type ke element ik hi array me aa sakte hai is second array ko ik element smj raha hai

// concat 
// isme new array banta hai aur isko new varible me store krwana padta hai 

const new_marve_heros=marvel_heros.concat(dc_heros);
//console.log(new_marve_heros); // ye do array ko add kr deta hai

// spread operator

const newmarvelsheros=[...marvel_heros,...dc_heros];
//console.log(newmarvelsheros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
//const real_another_array=another_array.flat(Infinity);
//console.log(real_another_array);


//console.log(Array.isArray("hitesh")); //check the given value array or not
//console.log(Array.from("hitesh")); // tukra me kr deta ik ik letter ko




