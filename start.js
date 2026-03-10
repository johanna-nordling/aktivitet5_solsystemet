
const btn = document.getElementById("enterBtn");

btn.addEventListener("click",()=>{

btn.classList.add("zoom");

document.body.classList.add("fade-out");

setTimeout(()=>{

window.location = btn.href;

},800);

});