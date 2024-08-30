//@krigjo25

// modal -> Initializing the data
let sec = 0;
let html = "";
let barometer = 100;

main();
function main()
{
    //  Start the interval
    setInterval(calculate_ms, 1000);
    return;
}

// View -> Reperesents the data
function foodOMeter()
{
    
    //  Manipulate the DOM
    document.getElementById('progress-bar').style.inlineSize = barometer + "%";
    document.getElementById('food-label').innerHTML = `${bar_warning()}`;
    document.getElementById('progress-label').innerHTML = `${barometer}%`;

    return;
}

//  Controller -> Manipulates th00e data and view
function calculate_ms()
{
    sec++

    //  Ensures that the function decreases the bar every second
    if (sec == 1)
    {
        sec = 0;
        decrease_bar();
    }

    return;
}


function refill_food_o_meeter()
{
    // Ensure that the barometer is below 75%
    if (barometer < 75)
    {
        //  Add 10 % to barometer
        barometer += 10;
    }

    return;
}

function decrease_bar()
{
    //  Ensure that bar-o-meeter is not below 0
    if (barometer > 0)
    {
        //  Decrease bar
        barometer --;
    
        foodOMeter();
        return ;
    }
    return;
}

function bar_warning()
{
    //  Ensure that barometer contains the values as presented
    if (barometer >= 75){return "Full !";}
    else if (barometer < 75 & barometer >= 50){return "Feeling a bit hungry !";}
    else if (barometer < 50 & barometer > 25){return "hangry";}
    
    return "Starving !";
}





