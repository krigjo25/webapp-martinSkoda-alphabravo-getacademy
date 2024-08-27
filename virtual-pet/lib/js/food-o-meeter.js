
//@krigjo25

// modal
let html = "";
let count_food = 4;

//  Controller
function refill_food_o_meeter()
{
    if (count_food < 4)
    {
        count_food++;
    }

    return;

}

function decrease_bar()
{

    if (count_food > 0)
    {
        console.log(count_food);
        count_food--;
        return foodOMeter();
    }
}

// View

function foodOMeter()
{
    // Fetch the elements id.
    let id = document.getElementById('food-o-meeter');
    console.log(count_food)
    //  Ensure the display is 100%
    if (count_food == 4)
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
    else if (count_food == 3)
        {
        //  Print out 4 bars
        html = /*HTML*/`
        Okay!:
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>`;
        }
    
    //  Ensure the display is 50%¨
    else if (count_food == 2)
        {
        //  Print out 2 bars
        html = /*HTML*/`
        Starting to become hungry !
        <div class="segment"></div>
        <div class="segment"></div>`;
    }

    //  Ensure the display is 25%
    else if (count_food == 1)
        {
        //  Print out 1 bars
        html = /*HTML*/`
        Starving !
        <div class="segment"></div>`;
        
        }
    else if (count_food == 0)
    {
            //  Print out 1 bars
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
        console.log(sec)

        document.getElementById('main').innerHTML = html;
        
        timer = setInterval(calculate_ms, 1000);
    foodOMeter();
}

let sec = 0;

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

main();