const track = document.getElementById("planetTrack");
const planets = Array.from(track.children);

// Sätt bakgrundsbilder
planets.forEach(planet => {
  planet.style.backgroundImage = `url(${planet.dataset.img})`;
});

// Fakta per planet
const planetFacts = {
  "Merkurius": { 
    "Temperatur": "Extrema temperaturer mellan -170°C och 430°C", 
    "Storlek": "Diameter: 4 879 km (Jorden: 12 742 km)", 
    "Miljö": "Vakuumliknande miljö, består mest av syre, natrium och väte", 
    "Övrig fakta": "Ett år är 88 jorddygn. Är solsystemets minsta planet med en kärna i järn som krymper" 
  },
  "Venus": { 
    "Temperatur": "Varmaste planeten med sina 460°C", 
    "Storlek": "Diameter: 12 104 km (Jorden: 12 742 km)", 
    "Miljö": "Den täta CO₂-atmosfären gör planeten till den varmaste i solsystemet", 
    "Övrig fakta": "Roterar baklänges jämfört med andra planeter. I atmosfären regnar det svavelsyra" 
  },
  "Jorden": { 
    "Temperatur": "Ständigt stigande medeltemperatur på ca 15°C", 
    "Storlek": "Diameter 12 742 km", 
    "Miljö": "Atmosfären består mest av kväve och syre. Har en skyddande mantel med naturlig växthuseffekt", 
    "Övrig fakta": "Kallas 'den blå planeten' då ytan består av 70% vatten. Är inte en perfekt sfär utan en ellips. Enda planeten där vi vet att liv existerar" 
  },
  "Mars": { 
    "Temperatur": "Genomsnittlig temperatur runt ca -60°C. Under vintern vid polerna kan den gå ner till -150°C", 
    "Storlek": "Diameter 6 779 km (Jorden: 12 742 km)", 
    "Miljö": "Består av ca 95% koldioxid. Har en tunn atmosfär utan ett magnetfält. Rymdsonder har bevisat att det har funnits flytande vatten på planeten", 
    "Övrig fakta": "Känd som 'den röda planeten' då atmosfären är fylld av röda partiklar från dess järnoxid" 
  },
  "Jupiter": { 
    "Temperatur": "Beroende på molnlagren ligger temperaturerna mellan -145°C på molntopparna till kärnan med en temperatur på omkring 24 000°C", 
    "Storlek": "Diameter 142 984 km (Jorden: 12 742 km)", 
    "Miljö": "Är en gasjätte med en tjock väte- och helium-atmosfär. Magnetfältet är 10 gånger starkare än Jordens", 
    "Övrig fakta": "Största planeten i solsystemet. Dess röda stormöga är dubbelt så stort som Jorden. Har flest månar (95 st) i solsystemet" 
  },
  "Saturnus": { 
    "Temperatur": "Ca -140°C runt molntopparna med en stigande temperatur in mot atmosfären runt ca 300°C", 
    "Storlek": "Diameter 120 500 km (Jorden: 12 742 km)", 
    "Miljö": "En gasplanet med lägst densitet i solsystemet. Består huvudsakligen av väte och helium. Extrema vindar som når ca 500 m/s", 
    "Övrig fakta": "Känd för sina ringar som består av mest vattenis och stenpartiklar. Det regnar diamanter då det omvandlade kolet som faller hårdnar i atmosfären" 
  },
  "Uranus": { 
    "Temperatur": "De kalla vindarna ger temperaturer på omkring -195°C/-224°C", 
    "Storlek": "Diameter 51 118 km (Jorden: 12 742 km)", 
    "Miljö": "En isjätte med atmosfärer av väte, helium, ammoniak och metan. Då metangasen absorberar rött ljus uppenbarar sig planeten blå-grön", 
    "Övrig fakta": "Roterar på sidan då dess axel har en lutning på omkring 98°. Liksom Saturnus har planeten ringar omkring sig" 
  },
  "Neptunus": { 
    "Temperatur": "Ständigt kalla vindar skapar medeltemperaturer på -200°C/-240°C", 
    "Storlek": "Diameter 49 528 km (Jorden: 12 742 km)", 
    "Miljö": "En isjätte med en atmosfär beståendes av väte, helium och metan. Liksom Uranus ger metangasen planeten sin blåa färg", 
    "Övrig fakta": "Enda bilden vi har av planeten togs för 33 år sedan av rymdsonden Voyager 2. Isvindarna har uppmätts färdas i 2000 km/h" 
  }
};

// Välj aktiv planet
const selected = new URLSearchParams(window.location.search).get("planet");
let activePlanet = planets.find(p => p.dataset.name === selected) || planets[2];

planets.forEach(p => p.style.display = "none");
activePlanet.style.display = "block";

/* --- Mittknapp --- */
const mainBtn = document.createElement("button");
mainBtn.className = "planet-main-btn";
mainBtn.textContent = activePlanet.dataset.name;
activePlanet.appendChild(mainBtn);

/* --- Subknappar med unik fakta --- */
const container = document.createElement("div");
container.className = "sub-btns-container";

["Temperatur", "Storlek", "Miljö", "Övrig fakta"].forEach(title => {
  const subBtn = document.createElement("button");
  subBtn.className = "sub-btn";
  subBtn.textContent = title;

  const popup = document.createElement("div");
  popup.className = "popup";
  if(title === "Miljö" || title === "Övrig fakta") popup.classList.add("popup-bottom");
  
  // Hämta unik fakta för planeten
  popup.textContent = planetFacts[activePlanet.dataset.name][title] || "Ingen fakta tillgänglig";

  subBtn.appendChild(popup);

  // Visa popup på hover
  subBtn.addEventListener("mouseenter", () => popup.style.display = "block");
  subBtn.addEventListener("mouseleave", () => popup.style.display = "none");

  container.appendChild(subBtn);
});

activePlanet.appendChild(container);

/* Visa/dölj subknappar när man klickar på mittknappen */
let isOpen = false;

mainBtn.addEventListener("click", () => {
  if (isOpen) {
    container.classList.remove("visible");
    isOpen = false;
  } else {
    container.classList.add("visible");
    isOpen = true;
  }
});

/* --- Knappen under planeten --- */
const posBtn = document.createElement("button");
posBtn.className = "planet-position-btn";
posBtn.textContent = "Tillbaka till planeterna";
posBtn.onclick = () => window.location.href = "./solsystem.html";
activePlanet.appendChild(posBtn);