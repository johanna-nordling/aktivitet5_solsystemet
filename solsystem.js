// Hämta alla planetknappar
const planets = document.querySelectorAll(".planet-btn");

// Intro-animation när sidan laddas
window.addEventListener("load", () => {

  const planets = document.querySelectorAll(".planet-btn");
  const introText = document.querySelector(".planet-intro-text");

  // visa text
  if(introText){
    introText.classList.add("show");
  }

  // tänd alla planeter
  planets.forEach(p => {
    p.classList.add("intro-glow");
  });

  // stäng av efter 4 sek
  setTimeout(()=>{
    planets.forEach(p => {
      p.classList.remove("intro-glow");
    });

    if(introText){
      introText.classList.remove("show");
    }

  },2000);

});

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
if (backBtn) {
  // Klick-event
  backBtn.addEventListener("click", () => {
    document.body.classList.add("fade-out"); // fade-out innan navigering
    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });

  // Tangentbordstöd (Enter eller mellanslag)
  backBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      backBtn.click();
    }
  });
}

// ESC stänger popup (om popup finns)
const popup = document.querySelector('.popup');
if (popup) {
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
  }
});
}
