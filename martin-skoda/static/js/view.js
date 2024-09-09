// view -> Manipulates the images
main();
function main()
{
    for (let i = 0; i < bar.length; i++)
    {
        //  Add a bars
        html+= `<div> ${bar[i].label}`;
        html+= `<div id="${bar[i].name}" width="${bar[i].inlineSize}" class="${bar[i].name}"></div>`;
        html+= `</div>`;
    }

    //  concat buddies
    html += `<div id='buddyList'>${buddy()}</div>`;
    html += `<div> Score: 0</div>`;

    app.innerHTML = html;
}

function buddy()
{
    let b="";
    for (let i = 0; i < buddies.length; i++)
    {
        //  Add a buddy to the html
        b += `<div class='${buddies[i]}'></div>`;
    }
    return b;
}

function vehicle()
{
    return `
    <div class="user-veh"></div>
    <div="user-choices>
    <button onclick"()">Upgrade</button>
    </div> `;
}