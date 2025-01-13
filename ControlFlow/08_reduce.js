const num=[1,2,3]

// const myNum=num.reduce(function ( Accumulator,calvalues){
//     console.log(`acc : ${Accumulator} calvalues: ${calvalues}`)  // isme jo Accumulator hai n ik starting point hai uske badd reduce ik ik value ko le kr uske sath add krta  hai aur har ik step ke baad  Accumulator ka value change hota hai
//     return Accumulator+calvalues;

// } ,0);
// console.log(myNum);
//const initialize=0;

const myNum=num.reduce((Accumulator,calvalues)=>{
    return Accumulator+calvalues;

},0)
console.log(myNum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


