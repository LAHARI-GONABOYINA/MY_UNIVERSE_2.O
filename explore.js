
// Find all celestial objects on the Space Map
const celestialObjects = document.querySelectorAll(".celestial-object");

// Destination order
const destinationOrder = [
    "sun",
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
];

// Open the selected destination's page
function openDestination(destination) {
    window.location.href = `planets/${destination}.html`;
}

// Clicking a planet opens its individual page
celestialObjects.forEach((object) => {
    object.addEventListener("click", () => {
        const destination = object.dataset.planet;
        openDestination(destination);
    });
});

// Explore Next Destination button
const nextDestinationButton = document.getElementById("next-destination");

if (nextDestinationButton) {
    let currentIndex = 0;

    nextDestinationButton.addEventListener("click", () => {
        const nextPlanet = destinationOrder[currentIndex];

        openDestination(nextPlanet);

        currentIndex =
            (currentIndex + 1) % destinationOrder.length;
    });
}
