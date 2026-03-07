
const btn = document.getElementById("enterBtn");

btn.addEventListener("click",()=>{

btn.classList.add("zoom");

document.body.classList.add("fade-out");

setTimeout(()=>{

window.location.href="solsystem.html";
window.location.href = "https://username.github.io/aktivitet5_solsystemet/solsystem.html";

},800);

});