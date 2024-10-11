// Functions
//@nico Controller: Kobler sammen modell og view, bestemmer responsen og beregner hastigheten
const controller = {
  handleEncounter: function () {
    const randomPersonIndex = model.getRandomEncounter(people.length); 
    const randomCarPartIndex = model.getRandomEncounter(carParts.length); 

    const person = people[randomPersonIndex];
    const carPart = carParts[randomCarPartIndex];

    let message = `${person.name} ser på bilen og legger merke til ${carPart.part}. `;

    if (!onCar.includes(carPart.part)) {
      if (coolValue < 100) {
        coolValue += carPart.coolnesFactor;
        if (coolValue > 100) {
          coolValue = 100;
        }
      }
      if (annoyedValue < 100) {
        annoyedValue += carPart.annoyedFactor;
        if (annoyedValue > 100) {
          annoyedValue = 100;
        }
      }
      onCar.push(carPart.part);
    }

    if (person.likesCar) {
      if (carPart.coolnesFactor > carPart.annoyedFactor) {
        const randomCoolPrompt = coolPrompts[model.getRandomEncounter(coolPrompts.length)];
        message += `${randomCoolPrompt}`;
      } else {
        const randomNotCoolPrompt = notCoolPrompts[model.getRandomEncounter(notCoolPrompts.length)];
        message += `${randomNotCoolPrompt}`;
      }
    }

    if (person.isAnnoyed) {
      const randomAnnoyedPrompt = isAnnoyedPrompts[model.getRandomEncounter(isAnnoyedPrompts.length)];
      message += ` ${randomAnnoyedPrompt}`;
    }

    speedValue = model.calculateSpeed(coolValue); 

    view.displayEncounter(message, speedValue);

    view.updateInstalledParts(onCar);

    view.updateCoolValue(coolValue);
    view.updateAnnoyedValue(annoyedValue); 
  },
};

setInterval(controller.handleEncounter, 5000);
