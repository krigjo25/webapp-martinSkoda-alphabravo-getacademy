//kris Update HTML
mainView();
function mainView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div class="road-map"></div>
        <aside id="values" class="values">
            <div id="bar-o-meeter-container">

                <div id="annoyed-label" class="annoyed-label">Grandma's annoyance:</div>
                <div id="annoyed-o-meeter" class="annoyed-o-meeter" style="width: 0%">0%</div>

                <div id="rep-label" class="rep-label" >Reputation:</div>
                <div id="rep-o-meeter" class="rep-o-meeter"  style="width: 0%">0%</div>

                <div id="speed-label" class="speed-label">Speedster:</div>
                <div id="speed-o-meeter" class="speed-o-meeter">0 km/t</div>
                <div id="cool-label" class="cool-label">Fabiolus:</div>
                <div id="cool-o-meeter" class="cool-o-meeter" style="width: 0%" >0%</div>
            </div>

        <div id="vehicle">
        <img src="static/img/rusty.jpg" alt="rusty.jpg"></div>

        <div id="buddy-list">
            <div class="prompts"></div>
            <button>button1</button>
            <button>button2</button>
        </div>
        <div id="aqured-parts"></div>
    </aside>`;
}
//nico
const view = {
    displayEncounter: function (message, speed) {
        console.log(`${message} Bilen kjører i ${speed} km/t.`);

        const speedDisplay = document.getElementById("speed-o-meeter");
        if (speedDisplay) {
            speedDisplay.innerHTML = `${speed} km/t`;
        }
    },
//amy
    updateCoolValue: function (coolValue) {
        const coolMeter = document.getElementById("cool-o-meeter");
        coolMeter.style.width = coolValue + "%";
        coolMeter.innerHTML = coolValue + "%";
    },
//yanis
    updateAnnoyedValue: function (annoyedValue) {
        const annoyedMeter = document.getElementById("annoyed-o-meeter");
        annoyedMeter.style.width = annoyedValue + "%";
        annoyedMeter.innerHTML = annoyedValue + "%";
    },
//nico
    updateInstalledParts: function (onCar) {
        const partsDisplay = document.getElementById("aqured-parts");
        partsDisplay.innerHTML = `<ul>${onCar
            .map((part) => `<li>${part}</li>`)
            .join("")}</ul>`;
    },
//yanis
    Rep: function () {
        const repmeter = document.getElementById("rep-o-meeter");
        repmeter.innerHTML = respectValue + "%";
        repmeter.style.width = respectValue + "%";
        console.log(respectValue);
    }
};
