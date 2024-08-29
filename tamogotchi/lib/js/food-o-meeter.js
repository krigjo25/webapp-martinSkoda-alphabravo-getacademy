//@krigjo25

// modal -> Initializing the data
let sec = 0;
let html = "";
let barometer = 100;

//  Controller -> Manipulates the data and view
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

        return foodOMeter();
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

// View -> Reperesents the data
function foodOMeter()
{
    // Fetch the DOM ids.
    let bar = document.getElementById('progress-bar');
    let label= document.getElementById('food-label');
    let prog = document.getElementById('progress-label');
    
    //  Manipulate the DOM
    bar.style.inlineSize = barometer + "%";
    label.innerHTML = `${bar_warning()}`;
    prog.innerHTML = `${barometer}%`;

    return;
}

function main()
{
    //  Start the interval
    setInterval(calculate_ms, 1000);
    return;
}
main();