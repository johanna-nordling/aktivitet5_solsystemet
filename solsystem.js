// Hämta alla planetknappar
const planets = document.querySelectorAll(".planet-btn");

planets.forEach((planet, index) => {

  // Klick på planeten
  planet.addEventListener("click", () => {
    planet.classList.add("zoom"); // Zoom-effekt på planeten
    document.body.classList.add("fade-out"); // Fade-out hela sidan

    const name = planet.dataset.planet;

    setTimeout(() => {
      window.location.href = `planetfakta.html?planet=${name}`;
    }, 800); // matchar övergångens längd
  });

  // Tangentbordsstöd (Enter / Space)
  planet.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " "){
      e.preventDefault();
      planet.click();
    }
  });

  // Popup/tooltip (om planeten har en tooltip i HTML)
  const popup = planet.querySelector(".popup, .speech-popup, .onplanet-tooltip");
  if(popup){
    // Skapa unikt id
    const title = planet.dataset.planet || `planet-${index}`;
    popup.id = `popup-${title.toLowerCase()}`;

    // ARIA-attribut
    popup.setAttribute("role", "tooltip");
    planet.setAttribute("aria-describedby", popup.id);

    // Visa tooltip vid fokus för tangentbord
    planet.addEventListener("focus", () => {
      popup.style.visibility = "visible";
    });
    planet.addEventListener("blur", () => {
      popup.style.visibility = "hidden";
    });
  }

});

// Back-knapp funktion
const backBtn = document.getElementById("backBtn");
if(backBtn){
  backBtn.addEventListener("click", () => {
    document.body.classList.add("fade-out"); // fade-out innan navigering
    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });

  // Tangentbordsstöd för back-knappen
  backBtn.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " "){
      e.preventDefault();
      backBtn.click();
    }
  });
}