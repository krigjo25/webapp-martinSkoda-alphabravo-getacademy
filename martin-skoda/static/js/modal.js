// Var and Const

const carParts = [
    {
        part: "spoiler",
        coolnesFactor: 15,
        annoyedFactor: 0
    },

    {
        part: "Sota ruter",
        coolnesFactor: 5,
        annoyedFactor: 2
    },

    {
        part: "straightpipe",
        coolnesFactor: 25,
        annoyedFactor: 50
    },

    {
        part: "wonderbaum",
        coolnesFactor: 0,
        annoyedFactor: 0
    },

    {
        part: "store felger",
        coolnesFactor: 10,
        annoyedFactor: 3
    },

    {
        part: "basskasse",
        coolnesFactor: 0,
        annoyedFactor: 60
    },

    {
        part: "nye (gamle) bremseskiver",
        coolnesFactor: 0,
        annoyedFactor: 60
    },

    {
        part: "svampebob firkant wrapper",
        coolnesFactor: 30,
        annoyedFactor: 1
    },

    {
        part: "Carbonfiber Hood",
        coolnesFactor: 25,
        annoyedFactor: 0
    }
];

const people = [
    {
        name: "Martin",
        likesCar: true,
        isAnnoyed: false
    },

    {
        name: "Terje",
        likesCar: true,
        isAnnoyed: false
    },

    {
        name: "Marie",
        likesCar: true,
        isAnnoyed: false
    },

    {
        name: "Anita",
        likesCar: true,
        isAnnoyed: false
    },

    {
        name: "Ellie Marie",
        likesCar: true,
        isAnnoyed: false
    },

    {
        name: "Eskil",
        likesCar: true,
        isAnnoyed: false
    },

    {
        name: "Bestemor",
        likesCar: false,
        isAnnoyed: true
    }
];

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

const coolPrompts = [
    "Den ser utrolig ut! Er den ny?",
    "Hvilken motor har du? Den høres kraftig ut!",
    "Kan jeg få ta en titt innvendig?",
    "Planlegger du å ta den med på bilutstillingen?",
    "Ser ut som en drøm på hjul!",
    "Er det sant at den går fra 0 til 100 på under 5 sekunder?",
    "Har du noen morsomme historier fra når du kjørte den?",
    "Den har virkelig stil! Hvem designet den?"
];

const notCoolPrompts = [
    "Det er en interessant farge, hva tenkte du på?",
    "Har du vurdert å oppgradere den?",
    "Er dette en spøk, eller er bilen din virkelig så stygg?",
    "Den bilen må ha vært en feil i produksjonen!",
    "Den bilen må virkelig ha en god motor, for utseendet kan ikke redde den.",
    "Så, hva er historien? Kjøpte du den med øynene lukket?",
    "Den bilen har virkelig ikke fått mye kjærlighet, har den?"
];

const isAnnoyedPrompts = [
    "Du har en gave for å irritere folk, vet du det?",
    "Du har virkelig en talent for å gjøre alt verre.",
    "Du tar virkelig prisen for å være plagsom.",
    "Livet er ikke et videospill. Slutt å kjøre så fort!",
    "Hva tenker du på? Det er ikke en racerbane her!"
];

//let onCar = [''];

let counter = 0;

let annoyedValue = 0;
let coolValue = 1;
let respectValue = 0;
let speedValue = 0;

//@nico Model: Genererer tilfeldige tall for person, bil-del, og beregner hastighet basert på coolness
const model = {
  getRandomEncounter: function(listLength) {
      return Math.floor(Math.random() * listLength);
  },
  
  // Beregner hastighet basert på bilens totale coolness factor
  calculateSpeed: function(coolnessFactor) {
      const minSpeed = 10; // Minimum hastighet når coolness = 0
      const maxSpeed = 100; // Maksimum hastighet når coolness = 100
      const speed = minSpeed + (maxSpeed - minSpeed) * (coolnessFactor / 100);
      return Math.round(speed); // Returner avrundet hastighet
  }
};