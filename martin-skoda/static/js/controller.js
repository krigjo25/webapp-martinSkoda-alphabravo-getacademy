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

    // Hent coolnessFactor fra bil-delen
    const coolnessFactor = carPart.coolnesFactor;

    // Velg riktig prompt basert på personens preferanser
    if (person.likesCar) {
      if (carPart.coolnesFactor > carPart.annoyedFactor) {
        // Hvis delen er kulere enn den irriterer
        const randomCoolPrompt =
          coolPrompts[model.getRandomEncounter(coolPrompts.length)];
        message += `${randomCoolPrompt}`;
      } else {
        // Hvis delen irriterer mer enn den er kul
        const randomNotCoolPrompt =
                    notCoolPrompts[
                        model.getRandomEncounter(notCoolPrompts.length)
                    ];
        message += `${randomNotCoolPrompt}`;
      }
    }

    // Hvis personen er irritert (Bestemor i dette tilfellet)
    if (person.isAnnoyed) {
      const randomAnnoyedPrompt =
                isAnnoyedPrompts[
                    model.getRandomEncounter(isAnnoyedPrompts.length)
                ];
      message += ` ${randomAnnoyedPrompt}`;
    }

    // Beregn hastigheten basert på coolness factor
    speedValue = model.calculateSpeed(coolnessFactor); // Oppdaterer speedValue

        // Oppdater meldingen og hastigheten i HTML
    view.displayEncounter(message, speedValue);

        // Legg til bildelen i onCar hvis den ikke allerede er installert
        if (!onCar.includes(carPart.part)) {
            onCar.push(carPart.part); // Legg til ny del
        }

        // Oppdater listen over installerte bildeler i HTML
        view.updateInstalledParts(onCar);

        // Oppdater coolValue i HTML
        const coolValue = carPart.coolnesFactor;
        view.updateCoolValue(coolValue);
    }
};

// Sett en timer som trigges hvert 5. sekund for å utføre et nytt encounter
setInterval(controller.handleEncounter, 10000); // Utfører handleEncounter hver 5. sekund
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
