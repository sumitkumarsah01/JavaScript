// immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log("DB CONNECTED");
})();  // ye semi colon jaruri hai lagana isme
// this type of function are use to the protect global pollution variable

( (name) =>{
    console.log(`DB CONNECTED2 ${name}`);
})("hitesh")



