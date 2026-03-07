// Alla planets-länkar
const planets = document.querySelectorAll(".planet-btn-link");

// Klick-event på planets-länkar
planets.forEach(link => {
  const img = link.querySelector("img");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    img.classList.add("zoom");
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = link.href;
    }, 800);
  });
});

// Tillbaka-knapp
const backBtn = document.querySelector(".back-btn");
if (backBtn) {
  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = backBtn.href;
    }, 800);
  });
}