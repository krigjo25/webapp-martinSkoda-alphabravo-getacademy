//  Controller
//@krigjo25
// modal
let html = "";
let count_food = 0;

//  Controller
function foodOMeter(count_food)
{
    // Fetch the elements id.
    let id = document.getElementById('food-o-meeter');
    console.log(id, count_food)
    //  Ensure the display is 100%¨

    if (count_food == 4)
    {
    //  Print out 4 bars
    html = /*HTML*/`
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
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>`;
        }
    
    //  Ensure the display is 50%¨
    else if (count_food == 2)
        {
        //  Print out 2 bars
        html = /*HTML*/`
        <div class="segment"></div>
        <div class="segment"></div>`;
    }

    //  Ensure the display is 25%
    else if (count_food == 1)
        {
        //  Print out 1 bars
        html = /*HTML*/`<div class="segment"></div>`;
        
        }
    else if (count_food > 4 || count_food < 1){

    }0
    id.innerHTML = html; 
    return;
}

function refill_food_o_meeter()
{
    return foodOMeter(food_count++);

}


// View
function main()
{
    console.log('test main')
    foodOMeter();

}