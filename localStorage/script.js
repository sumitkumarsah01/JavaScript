let  name=document.querySelector('.name-tag');
 

let input=document.querySelector('.input-tag');

name.innerText=localStorage.getItem('myName');

input.addEventListener('input',(e)=>{
       localStorage.setItem('muName',e.target.value);
       name.innerText=localStorage.getItem('myName')

})
