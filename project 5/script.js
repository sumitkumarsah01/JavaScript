const randomnumber= function(){
    let hex="0123456789ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
     color+=hex[Math.floor(Math.random()*16)]
     
    }
    return color;
  }
  
  let changecolor1
  function startchangcolor(){
      if(!changecolor1){
        changecolor1=setInterval(changecolor,2000)
      }
    }
    function changecolor(){
      document.body.style.backgroundColor=randomnumber()
    }
    
  
  document.querySelector('#start').addEventListener('click',startchangcolor);
  
  function stopcolor(){
    clearInterval(changecolor1)
    changecolor1=null;
  }
  
  document.querySelector('#stop').addEventListener('click',stopcolor);
  
  
  