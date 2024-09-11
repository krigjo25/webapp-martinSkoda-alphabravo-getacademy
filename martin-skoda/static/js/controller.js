// Functions
// Controller: Kobler sammen modell og view, bestemmer responsen og beregner hastigheten
const controller = {
    handleEncounter: function() {
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
                const randomCoolPrompt = coolPrompts[model.getRandomEncounter(coolPrompts.length)];
                message += `${randomCoolPrompt}`;
            } else {
                // Hvis delen irriterer mer enn den er kul
                const randomNotCoolPrompt = notCoolPrompts[model.getRandomEncounter(notCoolPrompts.length)];
                message += `${randomNotCoolPrompt}`;
            }
        }
  
        // Hvis personen er irritert (Bestemor i dette tilfellet)
        if (person.isAnnoyed) {
            const randomAnnoyedPrompt = isAnnoyedPrompts[model.getRandomEncounter(isAnnoyedPrompts.length)];
            message += ` ${randomAnnoyedPrompt}`;
        }
  
        // Beregn hastigheten basert på coolness factor
        speedValue = model.calculateSpeed(coolnessFactor); // Oppdaterer speedValue
  
        // Viser meldingen og hastigheten
        view.displayEncounter(message, speedValue);
    }
  };
  
  // Starter encounter
  controller.handleEncounter();
