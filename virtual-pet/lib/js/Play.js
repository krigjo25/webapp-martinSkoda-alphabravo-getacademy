let happytime = 100;
const happybar = document.getElementById("mood-progress")
const happyvalue = document.getElementById("happy-progress")

happymeter()
timersad()
function happymeter(){
    if (happytime === 100){
        happyvalue.innerHTML = /*HTML*/`
        100%`;
        changeImage('Happy');
        
    }else if (happytime === 75){
        happyvalue.innerHTML = /*HTML*/
        `75%`;
    }else if(happytime === 50){
        happyvalue.innerHTML = /*HTML*/
        `50%`;
    }else if(happytime === 25){
        happyvalue.innerHTML = /*HTML*/
        `25%`;}
       
    else if(happytime === 0){
        happyvalue.innerHTML = /*HTML*/
        `0%`;     
    }
    happybar.style.width = happytime + "%"
}


function play(){
    if(happytime < 100){
   happytime += 25}
   happymeter()
  }

  function timersad(){
    sadtime();
    setTimeout(timersad, 10000);
}

  function sadtime() {
    if(happytime > 0){
    var minus1 = 25;   
    happytime -= minus1}
    happymeter()
  }
 
 