const arr=["js","javaScript","java","python"]; 


arr.forEach( function (val) {
    //console.log(val);
    
});

arr.forEach((item)=>{
    //console.log(item)
})


function print(item){
    //console.log(item)
}

//arr.forEach(print)

arr.forEach((item,index,arr)=>{
    //console.log(item,index,arr)

})


const myObject=[
    {
        language:"java",
        languagefilename:"j"
    },
    {
        language:"python",
        languagefilename:"py"

    },
    {
      language:"javaScript",
      languagefilename:"js"
    }
]


myObject.forEach((item)=>{
       //console.log(item.language)
       //console.log(item.languagefilename)
})


const nums=[1,2,3,4,5,6,7,8,9,10];
const myNew=nums.forEach((nums)=>{  // foreach loop koi value return nhi krta hai
    return nums;
})

console.log(myNew)
