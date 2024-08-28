
//@krigjo25

// modal
let html = "";
let barometer = 4;
let sec = 0;

//  Controller
function calculate_ms()
{
    sec++

    if (sec == 30)
    {
        sec = 0;
        return decrease_bar();
    }
    return sec;
}


function refill_food_o_meeter()
{
    if (barometer < 4)
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
    if (barometer == 4){return warning = "Full !";}
    else if (barometer == 3){return warning = "Feeling a bit hungry !";}
    else if (barometer == 2){return warning = "hangry";}
    else if (barometer == 1){return warning = "Starving !";}
    else if (barometer == 0){return warning = "Dead";}
}
// View

function foodOMeter()
{
    // Fetch the elements id.
    let id = document.getElementById('food-o-meeter');

    //  The best practise
    //for (let i = 0; i < barometer.length; i++)
    //{
    //    html += /*HTML*/`
    //    ${warning}
    //    <div class="segment"></div>`;
    //}

    //  Ensure the display is 100%
    if (barometer == 4)
    {
        //  Print out 4 bars
        html = /*HTML*/`
        Full:
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>`;
    }
    //  Ensure the display is 75%¨
    else if (barometer == 3)
    {
        //  Print out 3 bars
        html = /*HTML*/`
        Okay!:
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>`;
    }
    
    //  Ensure the display is 50%¨
    else if (barometer == 2)
    {
        //  Print out 2 bars
        html = /*HTML*/`
        Starting to become hangry !
        <div class="segment"></div>
        <div class="segment"></div>`;
    }

    //  Ensure the display is 25%
    else if (barometer == 1)
    {
        //  Print out 1 bars
        html = /*HTML*/`
        Starving !
        <div class="segment"></div>`;
        
    }

    else if (barometer == 0)
    {
        html = /*HTML*/`
        Dead !`;
    }

    id.innerHTML = html;

    return;
}
function main()
{
    html = /*HTML*/`
        <div id="container">
        <div class="image-container">
            <img id="animal-image" src="https://cdn.discordapp.com/attachments/1268499932604796972/1277551598268059699/koala.png?ex=66cd9424&is=66cc42a4&hm=9d95ecf18731ae52bcd5afd73ffbf0ed09e965d9c167d4522b279f20cecbe736&" alt="Viritual Animal">
        </div>
        <div id="food-o-meeter">
        </div>

        <div class="buttons">
            <button onclick="refill_food_o_meeter()">nuts</button>
            <button onclick="changeImage('clean')">Clean</button>
            <button onclick="changeImage('sad')">Sad</button>
            <button onclick="changeImage('dirty')">dirty</button>
        </div>`;

        document.getElementById('main').innerHTML = html;
        
        timer = setInterval(calculate_ms, 1000);
    foodOMeter();

    return
}

main();