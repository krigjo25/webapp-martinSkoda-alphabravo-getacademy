// Functions
//@nico Controller: Kobler sammen modell og view, bestemmer responsen og beregner hastigheten
const controller = {
    handleEncounter: function () {
        const randomPersonIndex = model.getRandomEncounter(people.length); // Velger en tilfeldig person
        const randomCarPartIndex = model.getRandomEncounter(carParts.length); // Velger en tilfeldig bil-del

        const person = people[randomPersonIndex];
        const carPart = carParts[randomCarPartIndex];

        // Starter meldingen med en introduksjon
        let message = `${person.name} ser på bilen og legger merke til ${carPart.part}. `;

        // Oppdater coolnessFactor og annoyedFactor basert på den valgte delen
        if (!onCar.includes(carPart.part)) {
            // Legg til delens coolnessFactor og annoyedFactor bare hvis delen ikke allerede er på bilen
            coolValue += carPart.coolnesFactor;
            annoyedValue += carPart.annoyedFactor;

            // Legg til bildelen i onCar
            onCar.push(carPart.part);
        }

        // Velg riktig prompt basert på personens preferanser
        if (person.likesCar) {
            if (carPart.coolnesFactor > carPart.annoyedFactor) {
                const randomCoolPrompt = coolPrompts[model.getRandomEncounter(coolPrompts.length)];
                message += `${randomCoolPrompt}`;
            } else {
                const randomNotCoolPrompt = notCoolPrompts[model.getRandomEncounter(notCoolPrompts.length)];
                message += `${randomNotCoolPrompt}`;
            }
        }

        // Hvis personen er irritert (Bestemor i dette tilfellet)
        if (person.isAnnoyed) {
            const randomAnnoyedPrompt = isAnnoyedPrompts[model.getRandomEncounter(isAnnoyedPrompts.length)];
            message += ` ${randomAnnoyedPrompt}`;
        }

        // Beregn hastigheten basert på den totale coolness factor
        speedValue = model.calculateSpeed(coolValue); // Oppdaterer speedValue

        // Oppdater meldingen og hastigheten i HTML
        view.displayEncounter(message, speedValue);

        // Oppdater listen over installerte bildeler i HTML
        view.updateInstalledParts(onCar);

        // Oppdater coolValue og annoyedValue i HTML
        view.updateCoolValue(coolValue);
        view.updateAnnoyedValue(annoyedValue); // Lag denne funksjonen i view.js
    }
};

// Sett en timer som trigges hvert 5. sekund for å utføre et nytt encounter
setInterval(controller.handleEncounter, 5000); // Utfører handleEncounter hver 5. sekund
//amy
coolvaluestat();
//amy
function coolvaluestat() {
  const coolmeter = document.getElementById("cool-o-meeter");
    let randompartnum = Math.floor(Math.random() * carParts.length);
  let randompartcool = carParts[randompartnum].coolnesFactor;

  coolValue = coolValue + randompartcool;
  console.log(coolValue);

  // forandrer baren etter % av Cool
  coolmeter.style.width = coolValue + "%";
  coolmeter.innerHTML = coolValue + "%";
  
}

Rep();
function Rep() {
  const repmeter = document.getElementById("rep-o-meeter");

  //kan brukes på for å øke hvor mye rep man får fra coolvlue:  respectValue += (coolValue / 4)

  
  // forandrer baren etter % av Rep
  repmeter.innerHTML = respectValue + "%";
  repmeter.style.width = respectValue + "%";
  console.log(respectValue);
}

function newcarpart() {
  let randompartnum = Math.floor(Math.random() * carParts.length);
  carParts.splice(randompartnum, 1);
}
