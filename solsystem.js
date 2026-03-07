const planets = document.querySelectorAll(".planet-btn");

planets.forEach(planet=>{

planet.addEventListener("click",()=>{

planet.classList.add("zoom");

const name = planet.dataset.planet;

setTimeout(()=>{

window.location.href=`planetfakta.html?planet=${name}`;

},800);

});

});