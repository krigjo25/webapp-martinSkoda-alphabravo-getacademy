//kris Update HTML
mainView();
function mainView() {
    document.getElementById("app").innerHTML = /*HTML*/ `

            <div class="road-map"></div>
            <aside id="values" class="values">
                <div id="bar-o-meeter-container">
                    

                    <div id="annoyed-label" class="annoyed-label">Grandma's annoyance:</div>
                    <div id="annoyed-o-meeter" class="annoyed-o-meeter">0%</div>
                    
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
            
            </div>
            <div>
            <button> Update Speed </button><button> Update grandma's annoyance </button><button> Update  reps</button><button> Update Speed </button>
            </div>
            <div id="aqured-parts"></div>
        </aside>`;
}


