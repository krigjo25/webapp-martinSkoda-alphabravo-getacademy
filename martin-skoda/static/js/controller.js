// Functions
// Controller: Kobler sammen modell og view, og bestemmer responsen
const controller = {
    handleEncounter: function() {
        const randomPersonIndex = model.getRandomEncounter(people.length); // Henter en tilfeldig person
        const randomCarPartIndex = model.getRandomEncounter(carParts.length); // Henter en tilfeldig bil-del

        const person = people[randomPersonIndex];
        const carPart = carParts[randomCarPartIndex];

        // Starter meldingen med en introduksjon
        let message = `${person.name} ser på bilen og legger merke til ${carPart.part}. `;

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

        // Hvis personen er annoyed feks bestemora
        if (person.isAnnoyed) {
            const randomAnnoyedPrompt = isAnnoyedPrompts[model.getRandomEncounter(isAnnoyedPrompts.length)];
            message += ` ${randomAnnoyedPrompt}`;
        }

        // Viser meldingen
        view.displayEncounter(message);
    }
};

// Starter encounter
controller.handleEncounter();