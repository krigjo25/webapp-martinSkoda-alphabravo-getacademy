// Yaniss

//-----------Variables-------------
const barOutput = document.getElementById("clean-progress") ;
const output =  document.getElementById("howCleanBar") ;
let isMartinClean = true;
let seconds = 0;
let minutes = 0;
let cleanliness = 100;

//-----------Functions--------------

cleanTimer();
function cleanTimer() {
    let timer = setInterval(function () {
        seconds++;
        if (seconds == 3) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 1) {
            minutes = 0;
            deCleanMartin();
            clearInterval(timer);
        }
    }, 1000);

    output.innerHTML = cleanliness + "%" ;
    barOutput.style.width = cleanliness + "%" ;
}

function deCleanMartin() {
    cleanTimer();
    isMartinClean = false;
    cleanliness -= 5;

    if (cleanliness <= 35) {
        changeImage('dirty');
    }
    output.innerHTML = cleanliness + "%" ;
    barOutput.style.width = cleanliness + "%" ;
}

function cleanMartin() {
    
    cleanliness += 5 ;
    
    if(cleanliness >= 50){
        changeImage('clean')
    }
    
    limitCleanliness()
    output.innerHTML = cleanliness + "%" ;
    barOutput.style.width = cleanliness + "%" ; 
}


function limitCleanliness(){
    if(cleanliness >= 100){
        cleanliness = 100 ;
    } else if (cleanliness <= 0){
        cleanliness = 0 ;
        }
}
