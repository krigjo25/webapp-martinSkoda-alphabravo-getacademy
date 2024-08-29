//@krigjo25

// modal
let html = "";
let barometer = 100;
let sec = 0;

//  Controller
function calculate_ms()
{
    sec++
    console.log(sec);
    if (sec == 1)
    {
        sec = 0;
        return decrease_bar();
    }
    return sec;
}

function refill_food_o_meeter()
{
    if (barometer < 75)
    {
        barometer++;
    }

    return;

}

function decrease_bar()
{

    //  Ensure that bar-o-meeter is not below 0
    if (barometer > 0)
    {
        barometer--;
        return foodOMeter();
    }
    return;
}

function bar_warning()
{
    if (barometer >= 75){return warning = "Full !";}
    else if (barometer < 75 & barometer >= 50){return warning = "Feeling a bit hungry !";}
    else if (barometer < 50 & barometer > 25){return warning = "hangry";}
    else
        return warning = "Starving !";
}
// View

function foodOMeter()
{
    // Fetch the elements id.
    let id = document.getElementById('progress-bar-id');
    let label= document.getElementById('food-label');
    let prog = document.getElementById('progress-label');
    
    id.style.inlineSize = barometer;
    label.innerHTML = `${bar_warning()}`;
    
    prog.innerHTML = `${barometer}%`;

    return;
}
function main()
{
        timer = setInterval(calculate_ms, 100);

    return;
}
main();