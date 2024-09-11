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
                const randomCoolPrompt =
                    coolPrompts[model.getRandomEncounter(coolPrompts.length)];
                message += `${randomCoolPrompt}`;
            } else {
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
        const speedValue = model.calculateSpeed(coolnessFactor); // Beregn hastighet

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

    if ((coolValue <= 25) & (coolValue >= 0)) {
        coolmeter.style.backgroundColor = "red";
    } else if ((coolValue < 50) & (coolValue > 25)) {
        coolmeter.style.backgroundColor = "orange";
    } else if ((coolValue <= 100) & (coolValue <= 50)) {
        coolmeter.style.backgroundColor = "green";
    }
    console.log(coolValue);

    coolmeter.style.width = coolValue + "%";
}
