// Functions
// Controller: Kobler modellen og visningen
const controller = {
    handleEncounter: function() {
        const encounter = model.getRandomEncounter();
        
        switch (encounter) {
            case 0:
                view.displayEncounter("Du ladet turbotrykket til maks, og slapp bremsen.");
                break;
            case 1:
                view.displayEncounter("Du ladet turbotrykket til maks, og slapp bremsen.");
                break;
            case 2:
                view.displayEncounter("Du ladet turbotrykket til maks, og slapp bremsen.");
                break;
            case 3:
                view.displayEncounter("Du ladet turbotrykket til maks, og slapp bremsen.");
                break;
            case 4:
                view.displayEncounter("Du ladet turbotrykket til maks, og slapp bremsen.");
                break;
            default:
                view.displayEncounter("Noe uventet skjedde... mystisk.");
                break;
        }
    }
};

// Starter encounter
controller.handleEncounter();
