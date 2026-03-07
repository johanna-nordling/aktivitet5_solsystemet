
const planets = document.querySelectorAll(".planet-btn");

planets.forEach(planet => {
  planet.addEventListener("click", () => {
    planet.classList.add("zoom"); // Zoom-effekt på planeten
    document.body.classList.add("fade-out"); // Fade-out hela sidan

    const name = planet.dataset.planet;

    setTimeout(() => {
      window.location.href = `planetfakta.html?planet=${name}`;
    }, 800); // matchar övergångens längd
  });
});

// Tillbaka-knapp funktion
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out"); // fade-out innan navigering
  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
});