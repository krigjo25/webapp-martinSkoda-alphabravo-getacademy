
//@krigjo25

function calculate(start, finish)
{
        // calculates only 
        let sec = (ms) => ms / 1000;
        if (start)
            {return sec(Math.floor(finish - parseInt(start)));}
}

// modal
let html = "";
let count_food = 4;
let min = 0;
let sec = 0;
let ms = 0;

//  Controller
function foodOMeter()
{
    // Fetch the elements id.
    let id = document.getElementById('food-o-meeter');
    console.log(id, count_food)
    //  Ensure the display is 100%¨

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
    id.innerHTML = html;
    main();

    return;
}

function refill_food_o_meeter()
{
    if (count_food < 4)
        {
            count_food++;
        }
    return foodOMeter();

}

function decrease_bar()
{
    //  Fetch current time
    //  Calculate the time
    // return time;

    if (sec == 3)
    {
        count_food--;
    }
    foodOMeter();
    return;
}

// View
function main()
{
    timer = setInterval(calculate_ms, 100);
    console.log('test main')

}

function calculate_ms()
{

    ms++;

    if (ms == 100)
    {
        sec ++
    }
    else if (sec == 3)
    {
        return decrease_bar();
    }
    }
    else if(min == 3)
    {

    }

    if (sec == 3)
    {
        return decrease_bar();
    }
    return;
}
