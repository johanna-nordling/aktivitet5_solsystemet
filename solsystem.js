const planets = document.querySelectorAll(".planet-btn");

// Klick på planet → zoom + planetfakta.html
planets.forEach(planet => {
  planet.addEventListener("click", () => {
    planet.classList.add("zoom"); // Zoom-effekt på planeten
    document.body.classList.add("fade-out"); // Fade-out hela sidan

    const name = planet.dataset.planet;

    setTimeout(() => {
      // Relativ länk med query-param
      window.location.href = `./planetfakta.html?planet=${name}`;
    }, 800);
  });
});

// Tillbaka-knapp funktion → index.html
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out"); // fade-out innan navigering
  setTimeout(() => {
    window.location.href = "./index.html"; // Relativ länk
  }, 800);
});