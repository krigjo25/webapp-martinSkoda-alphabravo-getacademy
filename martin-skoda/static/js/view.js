//Update HTML
mainView();
function mainView() {
    document.getElementById("app").innerHTML = /*HTML*/ `

            <div class="road-map"></div>
            <aside id="values" class="values">
                <div id="bar-o-meeter-container">
                    

                    <div id="annoyed-label" class="annoyed-label">Grandma's annoyance:</div>
                    <div id="annoyed-o-meeter" class="annoyed-o-meeter"></div>
                    
                    <div id="rep-label" class="rep-label">Reputation:</div>
                    <div id="rep-o-meeter" class="rep-o-meeter"></div>

                    <div id="speed-label" class="speed-label">Speedster:</div>
                    <div id="speed-o-meeter" class="speed-o-meeter">0 km/t</div>
                    <div id="cool-label" class="cool-label">Fabiolus:</div>
                    <div id="cool-o-meeter" class="cool-o-meeter" style="width: 10%; background-color: green" ></div>
                </div>

            <div id="vehicle">
            <img src="static/img/rusty.jpg" alt="rusty.jpg"></div>

            <div id="buddy-list"></div>
            
            <div id="aqured-parts"></div>

        </aside>`;
}

//@nico Oppdatert View: Viser meldingen og hastigheten til brukeren, og oppdaterer HTML med hastigheten
const view = {
    displayEncounter: function(message, speed) {
        // Oppdater konsollen med meldingen
        console.log(`${message} Bilen kjører i ${speed} km/t.`);

        // Oppdater hastigheten i HTML
        const speedDisplay = document.getElementById("speed-o-meeter");
        if (speedDisplay) {
            speedDisplay.innerHTML = `${speed} km/t`; // Oppdater hastighetsmeteret
        }
    }
};
