// Hämta planetnamn från URL
const planet = new URLSearchParams(window.location.search).get("planet");

// Bakgrundsbilder för varje planet
const planetBackgrounds = {
  "Merkurius": { img: "images/onmerkur.jpeg", size: "100%", position: "center" },
  "Venus": { img: "images/onvenus.jpeg", size: "cover", position: "center" },
  "Jorden": { img: "images/onjorden.jpeg", size: "cover", position: "center" },
  "Mars": { img: "images/onmars.jpeg", size: "cover", position: "center bottom" },
  "Jupiter": { img: "images/onjupiter.jpeg", size: "cover", position: "center" },
  "Saturnus": { img: "images/onsaturn.jpeg", size: "cover", position: "center" },
  "Uranus": { img: "images/onuranus.jpeg", size: "cover", position: "center" },
  "Neptunus": { img: "images/onneptunus.jpeg", size: "cover", position: "center" }
};

// Fakta för varje planet
const planetFacts = {
  "Merkurius": "Från Merkurius himmel ser man en bländande solskiva då solen ser mycket större ut än vad vi är vana vid. Men himlen kommer alltid att vara svart även på dagen, då atmosfären är i princip obefintlig. Marken är lik den på månen, grå och fylld av kratrar.",
  "Venus": "Befinner vi oss på Venus är vi i en kvav, het och tjock dimma vilket gör sikten begränsad. Marken är fylld av steniga formationer. Temperaturen är obeskrivligt varm, och trycket från planeten ger en ständig känsla av att kroppen trycks nedåt med stor kraft.",
  "Jorden": "Här känns det bekant, levande och man hör ljud från allt liv som finns på planeten. Luften är fylld med syre och temperaturen är oftast behaglig. Miljön innehåller hav, floder och glaciärer. Geologiska strukturer täcker marken som berg, jord och vulkaner. Den är levande med mikroorganismer, växter, människor och djur i ekosystem som samspelar.",
  "Mars": "På Mars är luften mycket tunn, dammig och fylld av röda partiklar. Man är omringad av dalar, kratrar och vulkaner. Kallt är det och solen ser ännu mindre ut på himlen än från Jorden.",
  "Jupiter": "Man står inte direkt på något här då Jupiter inte har en fast yta. Istället är man omgiven av starka vindar av tjocka helium- och vätemoln i olika nyanser. Man känner sig mycket tung här då gravitationen är 2.5 gånger starkare än Jordens.",
  "Saturnus": "Här har man inget att stå på då planeten består av mestadels gas. Luften är fylld av virvlande moln av väte och helium. Vid horisonten ser vi Saturnus ringar. Tar vi oss längre in i planeten, kommer vi att omges av flytande väte och helium och trycket blir extremt högt.",
  "Uranus": "Att befinna sig på Uranus är som att vara i en isblå värld. Det är mycket kallt från de extrema isvindarna, och omgivningen är fylld av iskristaller av olika gaser i blå-gröna skiftningar.",
  "Neptunus": "På Neptunus är det extremt kallt och mörkt, en stormig gasvärld. Isvindarna är våldsamma i ett virvel omkring en av väte, helium och metan. Det finns flera molnlager där extrema åskstormar pågår. Solen är mycket svag här då Neptunus är solsystemets yttersta planet."
};

// Sätt bakgrund för planeten
if (planetBackgrounds[planet]) {
  const bg = planetBackgrounds[planet];
  document.body.style.backgroundImage = `url(${bg.img})`;
  document.body.style.backgroundSize = bg.size;
  document.body.style.backgroundPosition = bg.position;
  document.body.style.backgroundRepeat = "no-repeat";
}

// Sätt fakta i popup
const speechPopup = document.querySelector('.speech-popup');
if (planetFacts[planet] && speechPopup) {
  speechPopup.textContent = planetFacts[planet];
}

// Back-knapp
const backBtn = document.getElementById("backBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = `planetfakta.html?planet=${planet}`;
    }, 800);
  });
}