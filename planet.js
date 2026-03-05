const track = document.getElementById("planetTrack");
let planets = Array.from(track.children);

// Sätt bakgrundsbilder
planets.forEach(planet => {
  planet.style.backgroundImage = `url(${planet.dataset.img})`;
});

// Fakta per planet
const planetFacts = {
  "Merkurius": { "Temperatur": "Extrema temperaturer mellan -170°C och 430°C", "Storlek": "Diameter: 4 879 km (Jorden: 12 742 km)", "Miljö": "Vakuumliknande miljö, består mest av syre, natrium och väte", "Övrig fakta": "Ett år är 88 jorddygn. Är solsystemets minsta planet med en kärna i järn som krymper" },
  "Venus": { "Temperatur": "Varmaste planeten med sina 460°C", "Storlek": "Diameter: 12 104 km (Jorden: 12 742 km)", "Miljö": "Den täta CO₂-atmosfären gör planeten till den varmaste i solsystemet", "Övrig fakta": "Roterar baklänges jämfört med andra planeter. I atmosfären regnar det svavelsyra" },
  "Jorden": { "Temperatur": "En medeltemperatur på ca 15°C som är ständigt stigande", "Storlek": "Diameter 12 742 km", "Miljö": "Atmosfären består mest av kväve och syre. Har en skyddande mantel med naturlig växthuseffekt", "Övrig fakta": "Kallas 'den blå planeten' då ytan består av 70% vatten. Är inte en perfekt sfär utan en ellips. Enda planeten där vi vet att liv existerar" },
  "Mars": { "Temperatur": "Genomsnittlig temperatur runt ca -60°C. Men under vintern vid polerna kan den gå ner till -150°C", "Storlek": "Diameter 6 779 km (Jorden: 12 742 km)", "Miljö": "Består av ca 95% koldioxid. Har en tunn atmosfär utan ett magnetfält. Rymdsonder har bevisat att det har funnits flytande vatten på planeten", "Övrig fakta": "Känd som 'den röda planeten' då atmosfären är fylld av röda partiklar från dess järnoxid" },
  "Jupiter": { "Temperatur": "Beroende på molnlagren ligger temperaturerna mellan -145°C på molntopparna till kärnan med en temperatur på omkring 24 000°C", "Storlek": "Diameter 142 984 km (Jorden: 12 742 km)", "Miljö": "Är en gasjätte med en tjock väte- och helium-atmosfär. Magnetfältet är 10 gånger starkare än Jordens", "Övrig fakta": "Största planeten i solsystemet. Dess röda stormöga är dubbelt så stort som Jorden. Har flest månar (95 st) i solsystemet" },
  "Saturnus": { "Temperatur": "Ca -140°C runt molntopparna med en stigande temperatur in mot atmosfären runt ca 300°C", "Storlek": "Diameter 120 500 km (Jorden: 12 742 km)", "Miljö": "En gasplanet med lägst densitet i solsystemet. Består huvudsakligen av väte och helium. Extrema vindar som når ca 500 m/s", "Övrig fakta": "Känd för sina ringar som består av mest vattenis och sten. Det regnar diamanter då det omvandlade kolet som faller hårdnar i atmosfären" },
  "Uranus": { "Temperatur": "De kalla vindarna ger temperaturer omkring -195°C/-224°C", "Storlek": "Diameter 51 118 km (Jorden: 12 742 km)", "Miljö": "En isjätte med atmosfärer av väte, helium, ammoniak och metan. Då metangasen absorberar rött ljus uppenbarar sig planeten blå-grön", "Övrig fakta": "Roterar på sidan då dess axel har en lutning på omkring 98°. Liksom Saturnus har planeten ringar omkring sig" },
  "Neptunus": { "Temperatur": "Ständigt kalla vindar skapar medeltemperaturer på -200°C/-240°C", "Storlek": "Diameter 49 528 km (Jorden: 12 742 km)", "Miljö": "En isjätte med en atmosfär beståendes av väte, helium och metan. Liksom Uranus ger metangasen planeten sin blåa färg", "Övrig fakta": "Enda bilden vi har av planeten togs för 33 år sedan av rymdsonden Voyager 2. Isvindarna har uppmätts färdas i 2000 km/h" }
};

let activeIndex = Math.floor(planets.length / 2);

// Skapa knappar och popups
function createPlanetButtons(planet) {
  // Rensa gamla knappar
  ["planet-main-btn", "sub-btns-container", "planet-position-btn"].forEach(cls => {
    const el = planet.querySelector(`.${cls}`);
    if(el) el.remove();
  });

  const planetName = planet.dataset.name;

  // Huvudknapp
  const mainBtn = document.createElement("button");
  mainBtn.textContent = planetName;
  mainBtn.classList.add("planet-main-btn");
  planet.appendChild(mainBtn);

  // Subknappar
  const subContainer = document.createElement("div");
  subContainer.classList.add("sub-btns-container");
  planet.appendChild(subContainer);

  ["Temperatur", "Storlek", "Miljö", "Övrig fakta"].forEach(title => {
    const subBtn = document.createElement("button");
    subBtn.classList.add("sub-btn");
    subBtn.textContent = title;
    subContainer.appendChild(subBtn);

    const popup = document.createElement("div");
    popup.classList.add("popup");
    if(title === "Miljö" || title === "Övrig fakta") popup.classList.add("popup-bottom");
    popup.textContent = planetFacts[planetName][title] || "Ingen fakta tillgänglig";
    subBtn.appendChild(popup);

    subBtn.addEventListener("mouseenter", () => popup.style.display = "block");
    subBtn.addEventListener("mouseleave", () => popup.style.display = "none");
  });

  mainBtn.addEventListener("click", () => subContainer.classList.toggle("visible"));

  // Planetens solsystem-knapp
  const solarImg = planet.dataset.solarImg;
  const posBtn = document.createElement("button");
  posBtn.classList.add("planet-position-btn");
  posBtn.textContent = "Se planetens storlek i solsystemet";
  planet.appendChild(posBtn);

  posBtn.addEventListener("click", () => showSolarSystem(planetName, solarImg));
}

// Layout av planeter
function updateLayout() {
  planets.forEach((planet, index) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);

    // Mittplanet
    if(offset === 0) {
      planet.style.width = "80vmin";
      planet.style.height = "80vmin";
      planet.style.transform = "translate(-50%, -50%) scale(1)";
      planet.style.zIndex = 100;
      planet.style.opacity = 1;
      createPlanetButtons(planet);
    }
    // Närliggande planeter
    else if(absOffset === 1) {
      planet.style.width = "140px";
      planet.style.height = "140px";
      planet.style.transform = `translate(${offset * 300 - 50}%, -50%)`;
      planet.style.zIndex = 50;
      planet.style.opacity = 0.7;
      ["planet-main-btn", "sub-btns-container", "planet-position-btn"].forEach(cls => {
        const el = planet.querySelector(`.${cls}`);
        if(el) el.remove();
      });
    }
    // Övriga planeter
    else {
      planet.style.width = "80px";
      planet.style.height = "80px";
      planet.style.transform = `translate(${offset * 220 - 50}%, -50%)`;
      planet.style.zIndex = 10;
      planet.style.opacity = 0.3;
      ["planet-main-btn", "sub-btns-container", "planet-position-btn"].forEach(cls => {
        const el = planet.querySelector(`.${cls}`);
        if(el) el.remove();
      });
    }
  });
}

updateLayout();

// Klick på planet
track.addEventListener("click", e => {
  if(e.target.tagName !== "LI") return;
  activeIndex = planets.indexOf(e.target);
  updateLayout();
});

// Återställ vald planet via URL
const params = new URLSearchParams(window.location.search);
const selectedPlanet = params.get("planet");
if(selectedPlanet) {
  const index = planets.findIndex(p => p.dataset.name === selectedPlanet);
  if(index !== -1) {
    activeIndex = index;
    updateLayout();
  }
}

// Solsystem-funktionalitet
const solarContainer = document.getElementById('solarContainer');
const solarImg = document.getElementById('solarImg');
const backBtn = document.getElementById('backBtn');

function showSolarSystem(planetName, imgSrc) {
  solarImg.src = imgSrc || "images/solsystemet.jpg";
  solarContainer.classList.add('active');
}

// Stäng solsystemet
backBtn.addEventListener('click', () => {
  solarContainer.classList.remove('active');
});